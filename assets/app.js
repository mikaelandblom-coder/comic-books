// Tiny hash router: #/  ·  #/<series>  ·  #/<series>/<episode-number>
(function () {
  // Hidden series (e.g. paused/private ones) are left out of navigation and routing entirely.
  const series = window.CATALOG.series.filter((s) => !s.hidden);
  const app = document.getElementById("app");
  const nav = document.getElementById("series-nav");

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const sorted = (s) => [...s.episodes].sort((a, b) => a.number - b.number);
  const label = (e) => (e.label ? esc(e.label) : `#${e.number}`);

  nav.innerHTML = series.map((s) => `<a href="#/${s.slug}" data-slug="${s.slug}">${esc(s.title)}</a>`).join("");

  function home() {
    document.body.dataset.theme = "home";
    return `
      <section class="hero">
        <h1>Actuaries, superheroes and questionable loss ratios.</h1>
        <p>Pick a comic.</p>
      </section>
      <section class="series-grid">
        ${series
          .filter((s) => !s.archive)
          .map((s) => {
            const eps = sorted(s);
            const latest = eps[eps.length - 1];
            return `
            <a class="series-card theme-${s.theme}" href="#/${s.slug}">
              <div class="series-card-art">
                ${latest ? `<img src="${esc(latest.image)}" alt="" loading="lazy">` : `<span class="placeholder-mark">${esc(s.title)}</span>`}
              </div>
              <div class="series-card-body">
                <span class="badge">${esc(s.status)} · ${eps.length} episode${eps.length === 1 ? "" : "s"}</span>
                <h2>${esc(s.title)}</h2>
                <p class="tagline">${esc(s.tagline)}</p>
              </div>
            </a>`;
          })
          .join("")}
      </section>
      ${archiveBand()}`;
  }

  function archiveBand() {
    const a = series.find((s) => s.archive);
    if (!a || !a.episodes.length) return "";
    return `
      <section class="archive-band">
        <div>
          <h2>${esc(a.title)}</h2>
          <p>${esc(a.tagline)}</p>
        </div>
        <a href="#/${a.slug}">Browse ${a.episodes.length} early episodes →</a>
      </section>`;
  }

  function seriesPage(s) {
    document.body.dataset.theme = s.theme;
    const eps = sorted(s);
    return `
      <section class="series-hero">
        <h1 class="series-title">${esc(s.title)}</h1>
        <p class="tagline">${esc(s.tagline)}</p>
        <p class="description">${esc(s.description)}</p>
      </section>
      <section>
        <h2 class="section-title">${s.archive ? "Early episodes" : "Episodes"}</h2>
        ${
          eps.length
            ? `<div class="episode-grid">${eps
                .map(
                  (e) => `
              <a class="episode-card" href="#/${s.slug}/${e.number}">
                <img src="${esc(e.image)}" alt="" loading="lazy">
                <div><span class="ep-num">${label(e)}</span> ${esc(e.title)}</div>
                ${e.blurb ? `<p>${esc(e.blurb)}</p>` : ""}
              </a>`
                )
                .join("")}</div>`
            : `<div class="empty">No episodes yet. The first one is being drawn.</div>`
        }
      </section>
      ${
        s.cast?.length
          ? `<section>
        <h2 class="section-title">Cast</h2>
        <ul class="cast">
          ${s.cast.map((c) => `<li><strong>${esc(c.name)}</strong><span>${esc(c.note)}</span></li>`).join("")}
        </ul>
      </section>`
          : ""
      }`;
  }

  function episodePage(s, num) {
    document.body.dataset.theme = s.theme;
    const eps = sorted(s);
    const i = eps.findIndex((e) => e.number === num);
    if (i < 0) return notFound();
    const e = eps[i];
    const prev = eps[i - 1];
    const next = eps[i + 1];
    const link = (ep, label, cls) =>
      ep ? `<a class="${cls}" href="#/${s.slug}/${ep.number}">${label}</a>` : `<span class="${cls} disabled">${label}</span>`;
    return `
      <nav class="crumbs"><a href="#/${s.slug}">← ${esc(s.title)}</a></nav>
      <article class="episode">
        <h1><span class="ep-num">${label(e)}</span> ${esc(e.title)}</h1>
        ${e.date ? `<time datetime="${esc(e.date)}">${esc(e.date)}</time>` : ""}
        <a class="comic-frame" href="${esc(e.image)}" target="_blank" rel="noopener">
          <img src="${esc(e.image)}" alt="${esc(e.alt || e.title)}">
        </a>
        ${e.blurb ? `<p class="blurb">${esc(e.blurb)}</p>` : ""}
        <div class="pager">
          ${link(prev, "← Previous", "prev")}
          ${link(next, "Next →", "next")}
        </div>
      </article>`;
  }

  function notFound() {
    document.body.dataset.theme = "home";
    return `<div class="empty">Page not found. <a href="#/">Go home</a></div>`;
  }

  function render() {
    const [slug, num] = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    const s = series.find((x) => x.slug === slug);
    app.innerHTML = !slug ? home() : !s ? notFound() : num ? episodePage(s, Number(num)) : seriesPage(s);
    nav.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.dataset.slug === slug));
    const current = s ? (num ? `#${num} · ${s.title}` : s.title) : "Comic Books";
    document.title = current;
    window.scrollTo(0, 0);
  }

  // Arrow keys page through episodes
  document.addEventListener("keydown", (ev) => {
    if (ev.target.closest("input, textarea")) return;
    const sel = ev.key === "ArrowLeft" ? ".pager .prev" : ev.key === "ArrowRight" ? ".pager .next" : null;
    const a = sel && app.querySelector(`${sel}[href]`);
    if (a) location.hash = a.getAttribute("href");
  });

  window.addEventListener("hashchange", render);
  render();
})();
