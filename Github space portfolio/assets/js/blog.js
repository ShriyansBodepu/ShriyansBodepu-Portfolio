async function loadBlog(){
  const res = await fetch("assets/data/blog.json");
  const data = await res.json();

  const listEl = document.getElementById("blogList");
  if (!listEl) return;

  data.sort((a,b)=> (b.date||"").localeCompare(a.date||""));

  listEl.innerHTML = data.map(p => {
    const date = p.date ? new Date(p.date).toLocaleDateString(undefined, {year:"numeric", month:"short", day:"numeric"}) : "";
    return `
      <div class="item">
        <div>
          <h3 class="item__title"><a href="${p.link}">${p.title}</a></h3>
          <div class="item__meta">${date} • ${p.summary}</div>
        </div>
        <div class="tag">Blog</div>
      </div>
    `;
  }).join("");
}
loadBlog();
