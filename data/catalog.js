// Single source of truth for the site. Add an episode by appending to a series' `episodes` list.
// Paths are relative to the site root.
window.CATALOG = {
  series: [
    {
      slug: "nordic-ratewatch",
      title: "The Nordic Ratewatch",
      tagline: "Pricing is war. Loss ratios are propaganda.",
      description:
        "Dispatches from the pricing command center, where broker spreadsheets meet adjusted earned loss ratios and lose.",
      theme: "ratewatch",
      status: "In production",
      cast: [
        { name: "The Zen Analyst", note: "Eyes closed, fingers steepled, never wrong." },
        { name: "The General", note: "Beatings will continue until margins improve." },
        { name: "A²", note: "Cooked." },
        { name: "The R Wizard", note: "Has already re-run everything." },
      ],
      episodes: [
        // {
        //   number: 1,
        //   slug: "lost-triangles",
        //   title: "Lost Triangles",
        //   date: "2026-10-01",
        //   image: "series/nordic-ratewatch/episodes/001-lost-triangles.png",
        //   blurb: "We asked for loss triangles. We got a dinosaur.",
        //   alt: "Eight-panel comic in which ...",
        // },
      ],
    },
    {
      slug: "credibility-man",
      title: "Credibility Man",
      tagline: "Fully credible. Z = 1.",
      description:
        "The Silver Age hero who can't be fooled by a small sample. Armed with the Regularization Field, he protects the city from overfitting, divergence and statistical crime.",
      theme: "credibility",
      status: "In production",
      cast: [
        { name: "Credibility Man", note: "Square jaw, calculator belt, zero tolerance for n = 12." },
        { name: "Dr. Prior", note: "Always first to notice the divergence." },
        { name: "Gradient", note: "Villain. Wants to ascend forever." },
      ],
      episodes: [],
    },
    {
      slug: "teddy-bears",
      title: "White & Brown",
      tagline: "Two bears, one sofa.",
      description: "Small, soft stories about two teddy bears who belong together.",
      theme: "teddy",
      status: "Coming soon",
      cast: [
        { name: "White Bear", note: "TBD" },
        { name: "Brown Bear", note: "TBD" },
      ],
      episodes: [],
    },
  ],
};
