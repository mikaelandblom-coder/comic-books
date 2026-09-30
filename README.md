# Comic Books

A static comic website with three independent series:

| Series | Style | Bible |
|---|---|---|
| **The Nordic Ratewatch** | Semi-realistic noir "pricing command center", internal jokes | [`series/nordic-ratewatch/bible.md`](series/nordic-ratewatch/bible.md) |
| **Credibility Man** | Silver Age superhero, stats puns, no internal references | [`series/credibility-man/bible.md`](series/credibility-man/bible.md) |
| **White & Brown** (working title) | Watercolour picture-book teddy bears | [`series/teddy-bears/bible.md`](series/teddy-bears/bible.md) |

## How episodes are made
Read **[PROMPTING.md](PROMPTING.md)**. In short: style lock, character locks, reference images and the
episode script go to ChatGPT, and the image and its prompt are committed together.

## Layout
```
index.html, assets/        the website (plain HTML/CSS/JS, no build step)
data/catalog.js            list of series, cast and episodes; edit this to publish
series/<name>/bible.md     design document: style lock, character locks, rules
series/<name>/characters/  character model sheets (reference images for prompts)
series/<name>/episodes/    NNN-slug.png + NNN-slug.prompt.md
reference/drafts/          the original four exploratory drafts
```

## Viewing locally
```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Publishing
Turn on GitHub Pages (Settings → Pages → Deploy from branch → `main` / root). Every commit to `main` updates the site.
