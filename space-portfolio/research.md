---
title: Research
permalink: /research/
scripts:
  - /assets/js/research.js
---

<div class="card" style="padding:18px">
<div class="kicker">Research</div>
<h1 style="margin:8px 0 12px">Primary &amp; Secondary Sources</h1>
<p class="small">
      Use the tabs + search to sift through interviews, mentor visits, observations, and secondary sources.
      Add items in <span style="font-family:var(--mono)">assets/data/research.json</span>.
    </p>
<div class="btnRow">
<button class="btn secondary nav__link is-active" data-tab="primary" style="cursor:pointer" type="button">Primary Sources</button>
<button class="btn secondary nav__link" data-tab="secondary" style="cursor:pointer" type="button">Secondary Sources</button>
</div>
</div>
<div class="card section" style="padding:0; overflow:hidden">
<div class="toolbar">
<div class="left">
<input class="input" id="researchSearch" placeholder="Search (name, company, topic…)" type="search"/>
<select aria-label="Filter by type" class="select" id="researchFilter">
<option>All</option>
</select>
</div>
<div class="right">
<div class="small" id="researchCount">0 item(s)</div>
</div>
</div>
<div class="list" id="researchList"></div>
</div>
<script src="assets/js/research.js"></script>
