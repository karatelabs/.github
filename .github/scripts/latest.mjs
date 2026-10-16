// Rewrites the "Latest" line of profile/README.md between its markers: the newest
// karatelabs/karate release and the newest karatelabs.io blog post. Run daily by
// .github/workflows/latest.yml; the workflow commits only when the line changed.
//
// usage: node .github/scripts/latest.mjs [path/to/README.md]
import fs from 'node:fs';

const README = process.argv[2] || 'profile/README.md';
const START = '<!-- latest:start -->';
const END = '<!-- latest:end -->';
const UTM = 'utm_source=github&utm_medium=org-readme&utm_campaign=latest';

const headers = { 'User-Agent': 'karatelabs-org-readme', Accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function latestRelease() {
  const res = await fetch('https://api.github.com/repos/karatelabs/karate/releases/latest', { headers });
  if (!res.ok) throw new Error(`release lookup failed: ${res.status}`);
  const r = await res.json();
  return { tag: r.tag_name, url: r.html_url, date: r.published_at };
}

const decode = (s) => s
  .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&amp;/g, '&').trim();
const tag = (xml, name) => { const m = xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`)); return m ? decode(m[1]) : null; };

async function latestPost() {
  const res = await fetch('https://karatelabs.io/blog/rss.xml');
  if (!res.ok) throw new Error(`blog feed failed: ${res.status}`);
  const xml = await res.text();
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => ({
    title: tag(m[1], 'title'), url: tag(m[1], 'link'), date: new Date(tag(m[1], 'pubDate')),
  })).filter((i) => i.title && i.url && !isNaN(i.date));
  if (!items.length) throw new Error('blog feed had no items');
  return items.sort((a, b) => b.date - a.date)[0];
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const day = (d) => { const t = new Date(d); return `${t.getUTCDate()} ${MONTHS[t.getUTCMonth()]} ${t.getUTCFullYear()}`; };
// The line sits inside a centred HTML block, where GitHub renders HTML but not markdown.
const html = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const withUtm = (url) => url + (url.includes('?') ? '&' : '?') + UTM;

const [release, post] = await Promise.all([latestRelease(), latestPost()]);
const line = `<b>Latest</b> &nbsp; Karate <a href="${html(release.url)}">${html(release.tag)}</a> released ${day(release.date)}`
  + ` &nbsp;·&nbsp; On the blog: <a href="${html(withUtm(post.url))}">${html(post.title)}</a>`;

const readme = fs.readFileSync(README, 'utf8');
const at = readme.indexOf(START), end = readme.indexOf(END);
if (at < 0 || end < at) throw new Error(`markers ${START} … ${END} not found in ${README}`);
const next = readme.slice(0, at + START.length) + '\n' + line + '\n' + readme.slice(end);
if (next === readme) { console.log('latest: unchanged'); process.exit(0); }
fs.writeFileSync(README, next);
console.log('latest: ' + line);
