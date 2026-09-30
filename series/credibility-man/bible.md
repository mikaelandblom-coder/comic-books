# Credibility Man: Series Bible

> A more ridiculous, old-school superhero comic. Statistics and modelling are the superpowers.
> **No internal references.** Anyone who knows some stats or data science should get the jokes.

Status: **pre-production**. The visual look comes from the legacy *Gradient* issue in `legacy/`.

> Note: the legacy "Credibility Man #2: Lord Inadequate Premium" actually uses the Ratewatch cast
> and art style. That makes it a Ratewatch episode. Credibility Man issues should use only the cast below.

---

## 1. Visual style (the "style lock")

Paste this block **word for word** at the top of every Credibility Man prompt.

```text
STYLE — CREDIBILITY MAN
Classic Silver Age American superhero comic (1960s–70s style). Bold, confident black ink
outlines, flat saturated primary colours (blue, red, yellow), visible Ben-Day halftone dots in
skies and backgrounds, speed lines and burst effects for action. Bright daylight city scenes
with a slightly aged, off-white paper tone. Lettering: ALL-CAPS hand-lettered comic font, black
text in white rounded speech balloons with black outlines; key words in bold italic.
Panel numbers in bold black on small YELLOW squares in the top-left corner of each panel.
Narration in rectangular YELLOW caption boxes. Heroic, square-jawed, exaggerated poses.
NOT realistic, NOT dark, NOT manga, NOT painterly.
```

### Layout rules
| Rule | Value |
|---|---|
| Canvas | **1536 × 1024 landscape** |
| Grid | **6 panels, 3 columns × 2 rows**, white gutters, black panel borders |
| Title | Optional masthead strip: **CREDIBILITY MAN** in bold blue italic block letters with a black outline, then `— ISSUE #N: TITLE` |
| Balloons | At most **2 per panel** and **about 15 words each** |
| Panel 1 | Usually opens with a yellow location caption (for example `ACTUARIAL COMMAND CENTER`) |
| Panel 6 | Resolution, plus a yellow **"NEXT ISSUE:"** teaser box with a small black domino-mask icon |

---

## 2. Cast (the "character lock")

### CREDIBILITY MAN
```text
CREDIBILITY MAN: tall, broad-shouldered superhero, square jaw, confident smile, short slick
black hair with a single curl on the forehead. BLUE DOMINO MASK with white eye-lenses. BLUE
bodysuit with a large YELLOW letter "C" on the chest (no emblem border). RED cape, RED gloves,
RED boots. Brown belt with a small grey POCKET CALCULATOR as the buckle.
```
Powers: perfect credibility weighting. He can't be fooled by small samples.
Signature gadget: the **REGULARIZATION FIELD**, a chunky retro ray gun with a coiled hose and a glowing blue emitter.
Catchphrase candidates: *"Fully credible!"* / *"Not with THAT sample size!"*

### DR. PRIOR *(sidekick, name TBC)*
```text
DR. PRIOR: nerdy lab scientist, brown hair, round glasses, white short-sleeve shirt, thin green
tie, perpetually alarmed. Works at a retro control console with graph monitors.
```
Role: raises the alarm in panel 1. *"Credibility Man! The city's risk engine is diverging again!"*

### THE CITIZEN
```text
THE CITIZEN: ordinary guy in a green hoodie and grey baseball cap, stubble, worried expression.
```
Role: an everyman who is weary of the chaos. *"Why does this always happen right before renewal season?"*

### Rogues' gallery
Each villain is a statistical sin with a body.
| Villain | Look | Sin |
|---|---|---|
| **GRADIENT** | Humanoid swarm of **purple arrows** with glowing eyes. Defeated form: a smiling purple bell curve | Unconstrained ascent, overfitting |
| *THE OVERFITTER* (idea) | Tailor who stitches a suit to every single data point | 9th-degree polynomial on 12 points |
| *P-HACKER* (idea) | Burglar with a sack of discarded hypotheses | Tries tests until p < 0.05 |
| *CAPTAIN CONVERGED* (idea) | Asleep in a hammock | "The loss stopped decreasing… eventually" (teased in the draft) |
| *THE SPURIOUS CORRELATOR* (idea) | Two-headed villain: ice cream and shark attacks | Correlation ≠ causation |

---

## 3. Tone and writing rules
- Keep it loud, earnest and pun-heavy. Credibility Man always takes the maths completely seriously.
- Villains are never killed. They get **regularized, re-weighted or shrunk to the mean**.
- Every issue ends with a moral, the way a 1960s PSA would.
