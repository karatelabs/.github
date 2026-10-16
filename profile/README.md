<p align="center">
  <a href="https://karatelabs.io">
    <picture>
      <source media="(prefers-color-scheme: dark)"
        srcset="https://raw.githubusercontent.com/karatelabs/.github/main/profile/karate-labs-wide-black.png">
      <img src="https://raw.githubusercontent.com/karatelabs/.github/main/profile/karate-labs-wide.png" alt="Karate Labs" width="340" />
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://karatelabs.io"><img src="assets/banner.svg" alt="Open source, MIT, trusted by 76 of the Fortune 500. API, UI, mocks and performance. One tool. Plain syntax. Zero boilerplate." width="100%" /></a>
</p>

<p align="center">
  <a href="https://github.com/karatelabs/karate"><img src="https://img.shields.io/github/stars/karatelabs/karate?style=flat-square&labelColor=0F172A&color=F59E0B&logo=github&label=stars" alt="GitHub stars" /></a>
  <a href="https://github.com/karatelabs/karate/releases"><img src="https://img.shields.io/github/v/release/karatelabs/karate?style=flat-square&labelColor=0F172A&color=F59E0B&label=release" alt="Latest release" /></a>
  <a href="https://github.com/karatelabs/karate/blob/main/LICENSE"><img src="https://img.shields.io/github/license/karatelabs/karate?style=flat-square&labelColor=0F172A&color=F59E0B" alt="License" /></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=karatelabs.karate"><img src="https://img.shields.io/badge/vs%20code-install-F59E0B?style=flat-square&labelColor=0F172A" alt="Install for VS Code" /></a>
  <a href="https://plugins.jetbrains.com/plugin/19232-karate"><img src="https://img.shields.io/jetbrains/plugin/d/19232?style=flat-square&labelColor=0F172A&color=F59E0B&label=intellij%20downloads" alt="IntelliJ downloads" /></a>
  <a href="https://docs.karatelabs.io"><img src="https://img.shields.io/badge/docs-docs.karatelabs.io-60A5FA?style=flat-square&labelColor=0F172A" alt="Docs" /></a>
</p>

### A whole API test. No code, no step definitions.

```gherkin
Feature: users API

  Scenario: create and fetch a user
    Given url baseUrl + '/users'
    And request { name: 'Ana', email: 'ana@example.com' }
    When method post
    Then status 201
    And match response == { id: '#number', name: 'Ana', email: '#string' }
```

API, UI, mocks and performance tests share one syntax, run in parallel, and produce a report your whole team can read.

<a href="https://docs.karatelabs.io"><img src="assets/cta-docs.svg" alt="Get started at docs.karatelabs.io" width="330" /></a>

<a href="https://www.youtube.com/watch?v=WfVGuPURVK8"><img src="assets/video.svg" alt="Watch: Safe to ship (2:35)" width="100%" /></a>

### When AI writes the code and the tests

Generation got cheap. Knowing what's safe to ship didn't. Karate governs it, on the same open-source engine.

<p align="center">
  <a href="https://karatelabs.io/velocity"><img src="assets/pillar-velocity.svg" alt="Ship faster, proven" width="32%" /></a>
  <a href="https://karatelabs.io/trust-governance"><img src="assets/pillar-trust.svg" alt="Govern AI-written code" width="32%" /></a>
  <a href="https://karatelabs.io/control"><img src="assets/pillar-sovereignty.svg" alt="Own your proof" width="32%" /></a>
</p>

### We publish our own failing grade

Our reference API, graded by our own tooling, in public, on every commit. No login, no demo request.

**The graded spec**<br>
<a href="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/governance.html"><img src="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/governance-badge.svg" alt="governance" /></a>
<a href="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/governance.html"><img src="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/governance-index.svg" alt="governance index" /></a>
<a href="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/governance.html"><img src="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/governance-design.svg" alt="design" /></a>
<a href="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/governance.html"><img src="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/governance-provenness.svg" alt="proven-ness" /></a>

**The paired run**<br>
<a href="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/contract/pages/contract.html"><img src="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/contract-matched.svg" alt="contract scenarios matched" /></a>
<a href="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/contract/pages/contract.html"><img src="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/contract-untested.svg" alt="operations not tested" /></a>
<a href="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/contract/pages/contract.html"><img src="https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/contract-last-run.svg" alt="last contract run" /></a>

[Open the governance report](https://karatelabs.github.io/karate-agent-examples/policy-api/ext/governance/pages/governance.html) · [Open the contract report](https://karatelabs.github.io/karate-agent-examples/policy-api/ext/contract/pages/contract.html) · [How it is computed](https://karatelabs.io/api-governance)

### The Karate Labs family

<p align="center">
  <a href="https://github.com/karatelabs/karate"><img src="assets/product-karate.svg" alt="Karate: the open-source engine" width="19%" /></a>
  <a href="https://karatelabs.io/agent"><img src="assets/product-agent.svg" alt="Karate Agent" width="19%" /></a>
  <a href="https://karatelabs.io/xplorer"><img src="assets/product-ide.svg" alt="IDE and Xplorer" width="19%" /></a>
  <a href="https://karatelabs.io/karate-enterprise"><img src="assets/product-enterprise.svg" alt="Karate Enterprise" width="19%" /></a>
  <a href="https://veriquant.io"><img src="assets/product-veriquant.svg" alt="VeriQuant" width="19%" /></a>
</p>

> "Guidewire decided to leverage Karate Labs for our Testing Framework: a powerful, open-source, industry-standard technology designed to make testing automation simple and accessible."<br>
> Will Murphy, VP, Global Technology Alliances, Guidewire

---

<p align="center">
  <a href="https://docs.karatelabs.io">Docs</a> · <a href="https://docs.karatelabs.io/getting-started/quick-start">Get started</a> · <a href="https://karatelabs.io/learning">Learning</a> · <a href="https://karatelabs.io/karate-enterprise">Enterprise</a> · <a href="https://karatelabs.io/customers">Customers</a> · <a href="https://karatelabs.io/contact-us">Contact</a><br>
  <a href="https://www.linkedin.com/company/karatelabs">LinkedIn</a> · <a href="https://x.com/getkarate">X</a> · <a href="https://www.youtube.com/@karatelabs">YouTube</a>
</p>
