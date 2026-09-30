# The Nordic Ratewatch: Series Bible

> Internal actuarial humour. It makes fun of the struggles we actually have: broker pressure, missing data, raw loss ratios, loss triangles that arrive as physical objects.
> Audience: the team. Inside references are welcome. **No real names.**

Status: **pre-production**. The early episodes are in `legacy/`. From episode 1 onward, this document is the source of truth.
**Writing guide:** [`writers-room.md`](writers-room.md). Read it before scripting.

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
Lettering: clean mixed-case comic font in off-white rounded speech balloons with thin black
outlines. Faces expressive but realistic, NOT cartoonish. No chibi, no manga, no watercolor.
```

### Layout rules
| Rule | Value |
|---|---|
| Canvas | **1536 × 1024 landscape** |
| Grid | **6 panels, 2 columns × 3 rows** (as in legacy #2), or **8 panels, 4 × 2** for faster-paced episodes. Thin black gutters |
| Title bar | Black strip across the top: `THE NORDIC RATEWATCH #N:` in white, followed by the **episode title in gold**, in bold comic caps |
| Balloons | At most **3 balloons per panel** and **about 10 words per balloon**. Short text renders better |
| Time skips | Yellow caption box, top-left (`1 WEEK LATER`) |

### Recurring props and motifs
Background gags reward re-reading. Put one or two in every episode.
- **Mugs with slogans.** Canon: `BAYES OR DIE` (Martin), `SARCASM IS MY PRIOR`, `MODEL THEORIZE I AM`. Add a new one per episode.
- **The rubber duck.** A yellow debugging duck that moves around the office between episodes.
- The **K-WOLF high-protein** tub (the General's).
- Screens show **real-looking actuarial output**: loss triangles, `E[LR]`, credibility `Z = n/(n+k)`, R script tabs (`trend.R`, `large_loss_load.R`).
- The bad number is always red, and the corrected number is green and larger.
- A crumpled paper on the desk at the end shows the defeated request.

---

## 2. Cast (the "character lock")

Paste the lock for **every character who appears**, word for word, and **attach their model sheet** (`characters/*.png`) once it exists.
The prompts that generate the model sheets are in [`characters/sheet-prompts.md`](characters/sheet-prompts.md).

Each character has **one signature colour**, so you can tell them apart even in a dark room:
**General = olive · Martin = navy with a light-blue collar · Anika = purple · Zuzana = black with glasses.**

> Names are settled. See "Naming notes" at the end for the reasoning.

### MARTIN BAYESSON: pricing guru (Swedish)
```text
MARTIN: Swedish man, early 30s, the TALLEST of the team (about 190 cm), slim, short neat blond
hair with a side part, clean-shaven, light Nordic skin, calm symmetrical face, slight polite
smile. Wears a NAVY CREWNECK SWEATER over a LIGHT-BLUE COLLARED SHIRT (collar visible), dark-grey
chinos, brown leather shoes. Signature poses: fingers steepled under his chin, or eyes serenely
closed. Never looks angry; at most mildly puzzled. His mug says "BAYES OR DIE".
```
**Personality:** a "Sheldon Cooper"-style maths wizard, with the arrogance swapped for helpfulness. He genuinely wants to help everyone, and that is the problem: he will explain loss development to the broker, the cleaner and the fire alarm. He takes everything literally, is precise to a fault, and is serenely calm in a crisis because the crisis is "within the expected range".
**Comic engine:** he is *too* reasonable. He says devastating things kindly and doesn't notice they were devastating.

### GENERAL C.P.A. (Ctibor Pavol Adamec): Chief Pricing Actuary (Slovak)
```text
GENERAL C.P.A.: Slovak man, mid-50s, medium height (about 178 cm) but very broad and barrel-chested, short dark hair greying and receding,
full trimmed dark beard with grey streaks, heavy brows, rectangular black glasses, permanent
scowl. Wears an OLIVE-GREEN MILITARY JACKET with gold epaulettes, rows of colourful medal
ribbons, a small SLOVAK FLAG patch on one shoulder and a "CPA COMMAND" patch on the other.
Olive trousers, polished black combat boots. Big gestures: pointing, fists on the table,
leaning into the frame.
```
**Personality:** rules with an iron fist. Loves war-film quotes and takes every rate filing as a military campaign. He is very opinionated, insults anyone (brokers, the board, the weather, Excel), and has zero tolerance for BS. He is **always right about the numbers**, and that is why he gets away with it.
**Comic engine:** wildly disproportionate intensity, aimed exactly at the right target. He treats spreadsheets as war crimes and margins as territory.
**Name:** everyone calls him **"the CPA"** or **"General"**. He insists CPA stands for *Chief Pricing Actuary*. Anyone who assumes it means *Certified Public Accountant* is making a serious tactical error.
Catchphrase (use at most once every few episodes): **"Beatings will continue until margins improve."**

### ANIKA ARORA: junior pricing actuary (Indian-Canadian)
```text
ANIKA: Indian-Canadian young woman, mid-20s, the SHORTEST of the team (about 160 cm), warm brown skin, black curly hair in a high
messy bun, large expressive eyes, big reactions (eye-rolls, side-eye, jaw drops). Wears a
PURPLE HOODIE with a large gold "A²" printed on the chest (her initials), black joggers, chunky
white sneakers. Often holding a phone or a bubble-tea cup.
```
**Personality:** very energetic, fun and social. She speaks Gen-Z slang, knows everyone in the building and hears all the gossip first. She is **a genuinely good actuary**, and the slang is simply how she delivers correct technical verdicts.
**Comic engine:** she translates actuarial truth into Gen-Z, and the translation is often more accurate than the original. She also punctures the General's speeches.

### ZUZANA KÓDOVÁ: data scientist (Slovak)
```text
ZUZANA: Slovak woman, early 30s, average height (about 168 cm), slim, long dark-brown hair in a practical ponytail, rectangular glasses,
focused, unimpressed expression. Wears a plain BLACK BLOUSE, dark jeans, black ankle boots. Always at a laptop
or pointing a stylus at a screen full of code. A yellow rubber duck sits near her keyboard.
```
**Personality:** owns every data process. She is a code wizard who can solve anything, and she is mildly bored by how easy it all is. She speaks only when she has something to say.
**Comic engine:** deadpan competence. The team panics for three panels, then she solves it in one line and moves on. She also treats data as a living thing that has to be interrogated, negotiated with or put down.
**Slovak double act:** she and the General are the office's two Slovaks. When a broker says something truly unforgivable, they exchange **one line in Slovak** (rendered as a short balloon, with the translation as a tiny footnote caption) and everyone else pretends not to be scared. Use it rarely.

### Guest archetypes
- **BROKER PRIME:** the recurring antagonist. A slick broker in a dark suit with a headset, an unsettling grin and too many teeth, usually shown **on a video call**. Every risk is "straightforward". The logo is a crowned "R", PRIME BROKERAGE.
- **Villains of the week:** personifications of bad practice, drawn as absurd **gold-armoured royalty or monsters** labelled with their sins (see *Lord Inadequate Premium* in the archive).

---

## 3. Tone rules
- Every joke must be **technically correct**. Actuaries should laugh and nobody should wince.
- The team always wins. The broker never quite understands what happened.
- Punch **up** at bad methodology and bad process, not at people. No real client, broker or colleague names.
- See [`writers-room.md`](writers-room.md) for how we make the dialogue actually funny.

## 4. Episode ideas backlog
- **Lost Triangles** (legacy draft): we ask for loss triangles and a physical wooden dinosaur made of triangles arrives.
- **IBNR:** the invisible monster that is definitely in the room. The General wants to shoot it; Martin wants to estimate it.
- **Groundhog Renewal:** "just use last year's rate", forever, as a time loop.
- `FINAL_final_v7_USE_THIS.xlsx`: Zuzana performs forensic archaeology on file versions.
- **The Offsite:** team building. The General treats paintball as a reserving exercise.
- **Model Validation Day:** the model has to defend itself in court.

## 5. Naming notes
| Character | Name | Why |
|---|---|---|
| Zen actuary | **Martin Bayesson** | "Bayes-son", a Swedish-style patronymic joke, and it matches the BAYES OR DIE mug |
| General | **Ctibor Pavol Adamec, "General C.P.A."** | His initials spell his job title: Chief Pricing Actuary. *Ctibor* is an old Slavic name meaning roughly "honour-fighter". The "CPA COMMAND" patch already appears in a legacy draft |
| Junior | **Anika Arora** | The A.A. initials explain the "A²" hoodie |
| Data scientist | **Zuzana Kódová** | Slovak. *Kódová* reads as "of code" in Slovak |

Alternatives kept in reserve: the General could be Cyril Peter Adamec or Ctibor Pavol Ambróz, and the data scientist could be Lucia Dátová ("of data") or Katarína Bitková ("little bit").
