async function loadResearch(){
  const res = await fetch("assets/data/research.json");
  const data = await res.json();

  const state = {
    tab: "primary",
    q: "",
    filter: "All",
    data
  };

  const listEl = document.getElementById("researchList");
  const countEl = document.getElementById("researchCount");
  const searchEl = document.getElementById("researchSearch");
  const filterEl = document.getElementById("researchFilter");

  function items(){
    const raw = state.data[state.tab] || [];
    const q = state.q.trim().toLowerCase();
    return raw.filter(it => {
      const matchesFilter = state.filter === "All" || it.type === state.filter;
      const hay = (it.title + " " + it.topic + " " + it.type).toLowerCase();
      const matchesQ = !q || hay.includes(q);
      return matchesFilter && matchesQ;
    }).sort((a,b)=> (b.date||"").localeCompare(a.date||""));
  }

  function render(){
    const rows = items();
    if (countEl) countEl.textContent = `${rows.length} item(s)`;
    if (!listEl) return;

    listEl.innerHTML = rows.map(it => {
      const date = it.date ? new Date(it.date).toLocaleDateString(undefined, {year:"numeric", month:"short", day:"numeric"}) : "";
      const meta = [date, it.topic].filter(Boolean).join(" • ");
      const link = it.link && it.link !== "#" ? `<a class="btn secondary" href="${it.link}">Open</a>` : "";
      return `
        <div class="item">
          <div>
            <h3 class="item__title">${it.title}</h3>
            <div class="item__meta">${meta}</div>
          </div>
          <div class="tag">${it.type}</div>
        </div>
      `;
    }).join("");

    if (!rows.length) {
      listEl.innerHTML = `<div class="item"><div><h3 class="item__title">No matches.</h3><div class="item__meta">Try a different search or filter.</div></div></div>`;
    }
  }

  function setTab(tab){
    state.tab = tab;
    state.filter = "All";
    filterEl.value = "All";
    document.querySelectorAll("[data-tab]").forEach(b => {
      b.classList.toggle("is-active", b.dataset.tab === tab);
    });
    updateFilterOptions();
    render();
  }

  function updateFilterOptions(){
    const raw = state.data[state.tab] || [];
    const types = Array.from(new Set(raw.map(x => x.type))).sort();
    filterEl.innerHTML = ["All", ...types].map(t => `<option value="${t}">${t}</option>`).join("");
  }

  document.querySelectorAll("[data-tab]").forEach(btn => {
    btn.addEventListener("click", () => setTab(btn.dataset.tab));
  });

  searchEl.addEventListener("input", (e) => {
    state.q = e.target.value;
    render();
  });

  filterEl.addEventListener("change", (e) => {
    state.filter = e.target.value;
    render();
  });

  updateFilterOptions();
  render();
}

loadResearch().catch(err => {
  const listEl = document.getElementById("researchList");
  if (listEl) listEl.innerHTML = `<div class="item"><div><h3 class="item__title">Could not load research data.</h3><div class="item__meta">${String(err)}</div></div></div>`;
});
