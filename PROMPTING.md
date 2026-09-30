# Making an episode: prompt workflow

We write the script and prompt together, ChatGPT draws it, and the result is committed here along
with the exact prompt that produced it.

## Why the art drifts, and how we stop it
Image models can't remember earlier episodes. Consistency has to come from **what we send in each prompt**:

1. **Style lock:** a fixed paragraph describing the art style (in each series' `bible.md`), pasted word for word.
2. **Character lock:** a fixed paragraph per character, pasted word for word, every time.
3. **Reference images:** attach the character sheet(s) and one "canonical" finished episode.
   This helps more than anything else.
4. **Fixed layout:** the same canvas size, panel grid and lettering rules every time.
5. **Short text:** fewer, shorter balloons. Long dialogue is where spelling and layout fall apart.

## One-time setup per series: character sheets
Generate a **model sheet** for each main character before the first real episode, then save it to
`series/<series>/characters/<name>.png`. Attach it to every future prompt where that character appears.

```text
[PASTE STYLE LOCK]

Create a CHARACTER MODEL SHEET on a plain light-grey background, 1536×1024.
Show the same character 4 times in a row: front view, three-quarter view, side profile,
and one signature pose/expression. Add a small colour-swatch strip underneath for skin, hair,
and each clothing colour. Label at top: "<NAME> — MODEL SHEET". No other text.

[PASTE CHARACTER LOCK FOR THIS ONE CHARACTER]
```

If one generation matches the drafts well, make it canonical: commit it and stop regenerating.

## Episode prompt template
Copy this, fill it in, and send it to ChatGPT **with the reference images attached**.

```text
[PASTE STYLE LOCK]

LAYOUT: <canvas size>, <grid> panels, <layout rules from the bible>.
TITLE BAR: "<SERIES> #<N>: <EPISODE TITLE>"

CHARACTERS IN THIS EPISODE (match the attached model sheets exactly):
[PASTE CHARACTER LOCK for each character appearing]

PANELS:
1. <Setting / camera shot>. <Who is doing what>.
   <CHARACTER>: "<line>"
   <CHARACTER>: "<line>"
2. ...
(... one entry per panel ...)

TEXT RULES: Render all dialogue EXACTLY as written, spelled correctly. No extra text, no
extra captions, no watermark. Keep each character's clothing, hair and colours identical
across all panels.
```

## Iterating
- If one panel is wrong, use ChatGPT's **edit/select area** tool on that panel. Regenerating everything makes other panels drift.
- If a character drifts, say so explicitly: *"The General must wear the olive jacket with gold epaulettes, as in the attached sheet."*
- If a line is misspelled, shorten it. Models misspell long lines far more often.

## Publishing an episode
1. Save the image as `series/<series>/episodes/<NNN>-<slug>.png` (for example `001-lost-triangles.png`).
2. Save the final prompt next to it as `<NNN>-<slug>.prompt.md`, so we know exactly what produced it.
3. Add an entry to `data/catalog.js` (title, number, date, image, short blurb, alt text).
4. Commit. The site updates automatically.

If a style or character lock changes, edit the bible **and note the episode number** where the change took effect.
