# The Nordic Ratewatch: Series Bible

> Internal actuarial humour. It makes fun of the struggles we actually have: broker pressure, missing data, raw loss ratios, loss triangles that arrive as physical objects.
> Audience: the team. Inside references are welcome.

Status: **pre-production**. The character descriptions come from the two Ratewatch drafts in
`reference/drafts/`. Fill in the `TODO`s before generating episode 1.

---

## 1. Visual style (the "style lock")

Paste this block **word for word** at the top of every Ratewatch prompt. Don't edit it for a single
episode. If it has to change, change it here so every later episode uses the new version.

```text
STYLE — THE NORDIC RATEWATCH
Semi-realistic graphic-novel art with detailed ink linework and cross-hatching, like a
modern noir/military-thriller comic. Cinematic lighting: the scene is lit mostly by glowing
monitors, holograms and dashboards. Palette: deep navy and midnight blue, with cyan/teal screen
glow and warm skin tones. Red and amber are used ONLY for alerts, warnings and bad numbers;
green only for good numbers. Setting feels like a pricing "command center" crossed with a
Nordic office: big windows with snowy mountains at night, dark desks, multiple screens.
Lettering: clean, mixed-case or small-caps comic font in off-white rounded speech balloons with
thin black outlines. Panel numbers in small yellow squares in the top-left corner of each panel.
Faces expressive but realistic, NOT cartoonish. No chibi, no manga, no watercolor.
```

### Layout rules
| Rule | Value |
|---|---|
| Canvas | **1536 × 1024 landscape** |
| Grid | **8 panels, 4 columns × 2 rows**, thin black gutters |
| Title bar | Black strip across the top: compass-star logo at left, then `THE NORDIC RATEWATCH #N:` in small white caps and the **episode title in large gold/white caps** below it |
| Balloons | At most **2 balloons per panel** and **about 12 words per balloon**. Short text renders better |
| Last panel | A punchline, usually delivered by The General |

### Recurring visual motifs
- A black `NR` coffee mug appears somewhere in most episodes.
- The screens show **real-looking actuarial output**: loss triangles, `E[LR]`, credibility `Z = n/(n+k)`, R script tabs (`trend.R`, `large_loss_load.R`).
- The bad number is always red, and the corrected number is green and larger.
- A crumpled paper on the desk at the end (for example "35% DISCOUNT") shows the defeated request.

---

## 2. Cast (the "character lock")

Paste the block for **every character who appears** in the episode, word for word.
**Attach the matching character sheet** (`series/nordic-ratewatch/characters/*.png`) when you have one.

> TODO: Give each character a name or nickname. Right now they have role names. Colleagues have to agree before they appear.

### THE ZEN ANALYST
```text
THE ZEN ANALYST: man, early 30s, short neat blond hair with a side part, clean-shaven, light
Nordic skin, calm symmetrical face. Almost always has his EYES CLOSED serenely and FINGERS
STEEPLED in front of his chin. Wears a dark navy long-sleeve button shirt (or navy fleece with a
small "NR" logo). Never shouts. Speaks in short, devastating sentences.
```
Role: the calm centre who delivers quiet, precise put-downs. *Example: "One observation does not establish a trend."*

### THE GENERAL
```text
THE GENERAL: man, mid-50s, short dark hair receding at temples, full trimmed dark beard going
grey, heavy brows, rectangular black glasses. Wears an OLIVE-GREEN MILITARY DRESS JACKET with gold
epaulettes, rows of colourful medal ribbons and an "NR" shoulder patch. Permanently intense,
scowling or grinning aggressively. Big gestures, clenched fists.
```
Role: the boss, who treats pricing like a war. Catchphrase: **"Beatings will continue until margins improve."** Recurring prop: a tub of **K-WOLF high-protein** something.

### A² (A-SQUARED)
```text
A-SQUARED: young woman, mid-20s, dark brown skin, black curly hair in a high messy bun, large
expressive eyes, big reactions. Wears a NAVY HOODIE with a large gold "A²" printed on the chest.
Often holds a mug with "A²" on it.
```
Role: the Gen-Z commentator. Delivers one-word verdicts: **"Cooked."**

### THE R WIZARD
```text
THE R WIZARD: young woman, late 20s, long wavy golden-blonde hair, fair skin, focused
expression. Wears a NAVY HOODIE printed "R > ALL". Usually typing, surrounded by floating R script
windows.
```
Role: quietly re-runs everything. *Example: "I re-ran everything."*

### THE SKEPTIC *(optional / to confirm)*
```text
THE SKEPTIC: woman, 30s, long straight dark-brown hair, rectangular glasses, black blazer, arms
often crossed, one raised eyebrow.
```
Role: the one who says "This is not data."

### Guest archetypes
- **THE BROKER:** slick navy suit, too-wide grin, slicked hair. Often appears as a **blue translucent hologram**. His numbers are always raw and always flattering.
- **Villains of the week:** personifications of bad practice, drawn as **gold-armoured absurd royalty or monsters** labelled with their sins (see *Lord Inadequate Premium*).

---

## 3. Tone and writing rules
- Every joke should be **technically correct**. Actuaries should laugh and nobody should wince.
- The team never loses. The broker never quite understands what happened.
- Punch **up** at bad methodology, not at people. No real client or broker names.
- Keep the jargon to what the team really says: on-levelling, earned vs written, large-loss load, credibility, IBNR, chain ladder, triangles.

## 4. Episode ideas backlog
- **Lost Triangles** (draft exists): we ask for loss triangles, a physical wooden dinosaur made of triangles arrives, and it's "not data".
- **Lord Inadequate Premium** (draft exists): a raw written LR of 42% turns into an adjusted earned LR of 78%.
- IBNR: the invisible monster that is definitely in the room.
- "Just use last year's rate": the Time Loop episode.
- The Excel file named `FINAL_final_v7_USE_THIS.xlsx`.
