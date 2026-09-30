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
        { name: "Martin Bayesson", note: "Pricing guru. Calm, helpful, and technically correct in the most unbearable way." },
        { name: "General C.P.A.", note: "Chief Pricing Actuary. Not an accountant. Beatings will continue until margins improve." },
        { name: "Anika Arora", note: "Junior actuary. Understands the loss ratio. It's giving underpriced." },
        { name: "Zuzana Kódová", note: "Data scientist. Already fixed it. Also fixed the thing you were about to break." },
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
      status: "Paused",
      hidden: true, // private series: paused, and to be password-protected before it goes live
      cast: [
        { name: "White Bear", note: "TBD" },
        { name: "Brown Bear", note: "TBD" },
      ],
      episodes: [],
    },
    {
      slug: "archive",
      archive: true,
      title: "The Archive",
      tagline: "The early episodes, from before we had a style guide.",
      description:
        "Where it all started. These were made before the series bibles existed, so faces, costumes and even which series someone belongs to may shift from page to page. Kept here for history.",
      theme: "home",
      status: "Legacy",
      episodes: [
        {
          number: 1,
          label: "Ratewatch #1",
          title: "Lord Inadequate Premium",
          image: "legacy/ratewatch-01-lord-inadequate-premium.png",
          blurb: "A raw written loss ratio of 42% meets an adjusted earned view.",
        },
        {
          number: 2,
          label: "Ratewatch #2",
          title: "Broker Prime and the JPEG of Doom",
          image: "legacy/ratewatch-02-broker-prime-and-the-jpeg-of-doom.png",
          blurb: "The exposure schedule arrives as a photo of a printout. With a thumb.",
        },
        {
          number: 3,
          label: "Ratewatch",
          title: "Lost Triangles",
          image: "legacy/ratewatch-lost-triangles.png",
          blurb: "We asked for loss triangles. We got a dinosaur.",
        },
        {
          number: 4,
          label: "Credibility Man",
          title: "Gradient",
          image: "legacy/credibility-man-01-gradient.png",
          blurb: "A villain made of arrows who wants to ascend forever.",
        },
        {
          number: 5,
          label: "Credibility Man #2",
          title: "Lord Inadequate Premium",
          image: "legacy/credibility-man-02-lord-inadequate-premium.png",
          blurb: "The crossover no one planned.",
        },
      ],
    },
  ],
};
