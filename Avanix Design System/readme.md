# Avanix Design System

**Avanix — AI Education & Automation.** A Vietnamese-led community ("cộng đồng AI") and
course platform founded by Nguyên (of the *Pie Of Mind* channel) and five partners. The
brand teaches *practical* AI: designing systems, building self-running agents, turning
messy data into assets, and automating real work. Tagline: **"AI thực chiến — ra kết quả
thật"** / *"AI Education that works."*

The product is a $5/month Skool-style community + course library where members copy real
templates and automation workflows (n8n, Claude, Antigravity…), share results, and debug
together. Audience is primarily Vietnamese, hands-on, builder-minded.

This design system captures Avanix's brand: the **A-monogram** logo, the **Nix** caped-penguin
mascot, a navy + electric-blue + white palette, **Plus Jakarta Sans + Inter** typography, and a **liquid-glass
3D** illustration/surface language.

---

## Sources

Built from the official brand assets supplied by the user (no codebase or Figma was provided):

- `uploads/avatar.png` — square navy social avatar (A-monogram + wordmark).
- `uploads/banner skool.png` — Skool community banner ("AI thực chiến — RA KẾT QUẢ THẬT").
- `uploads/ChatGPT Image … 09_37_30 PM.png` — **full brand guide sheet** (logo, reversed,
  app icon, color palette `#0B1240 / #FFFFFF / #0A5BFF`, display + body type, business card,
  stationery, web hero, course card, merch).
- `uploads/ChatGPT Image … 09_09_54 PM.png` — logo variations + "AI EDUCATION THAT WORKS" banner.
- `uploads/ChatGPT Image … 11_11_07 PM.png` — **"MEET NIX"** mascot sheet (turnaround, action poses).
- `uploads/ChatGPT Image … 11_19_46 / 11_21_38 PM.png` — Nix turnaround views + white A icon.

**Desired illustration style** (user direction, with reference screenshots): **liquid glass 3D** —
frosted translucent cards, glossy 3D elements, glass-tube connectors, soft shadows on light
gradient backgrounds, electric-blue accents and glows. *Note: the robot mascots in those
reference posts belong to another creator (SAMS / Axial Studio) and are NOT used here — Avanix's
own mascot is **Nix** the penguin, whose glossy 3D form fits the glass aesthetic perfectly.*

Extracted, cleaned assets live in `assets/` (see index at the bottom).

---

## CONTENT FUNDAMENTALS — how Avanix writes

**Voice:** a knowledgeable peer who has actually shipped systems — and broken them. Humble,
direct, anti-hype. No "get rich with AI overnight" promises; the explicit stance is *"không có
công thức thần kỳ"* (no magic formula), just real experience that saves you fumbling time.

**Language:** **Vietnamese-first** for community/product copy, **English** for brand taglines
and headlines. Mixing is normal and on-brand (e.g. "Bộ não thứ hai với Claude", "AI Education
that works"). Keep English technical terms as-is (Agent, workflow, prompt, n8n, debug).

**Person:** warm and inclusive — *"ae mình"* (anh em mình / "us"), *"tụi mình"*, addressing the
reader as *"bạn"*. First-person-plural for the team, second-person for the member. Collaborative,
never lecturing.

**Tone & casing:**
- Headlines: punchy, outcome-first, often a two-part structure with the payoff in blue.
  e.g. **"AI thực chiến, ra _kết quả thật_."** · **"AI EDUCATION THAT _WORKS_."**
- Body: short, scannable sentences; lead with the benefit. Plain words over jargon.
- Sentence case for Vietnamese UI; UPPERCASE reserved for short English hero words and eyebrows.

**Examples from the brand:**
- "Practical AI skills. Real automation. Future-ready you."
- "Làm chủ tư duy thiết kế hệ thống · Xây hệ thống Agent tự vận hành · Biến dữ liệu hỗn loạn thành tài sản"
- "Skills today. Systems tomorrow. Freedom always." (Nix tagline)
- "Học AI. Build Skills. Automate. Earn." (Nix)
- CTAs: "Bắt tay vào việc ngay", "Tham gia", "Bắt đầu", "Tiếp tục học".

**Emoji:** used sparingly and naturally in *community* copy (🎉 👋 👇), essentially never in
marketing headlines or UI chrome. Don't decorate with emoji as icons — use the icon set.

---

## VISUAL FOUNDATIONS

**The two-world system.** Avanix lives in two complementary modes; pick per surface:
1. **Navy hero world** (dark) — the signature look. Deep navy radial gradient
   (`#16236e → #0B1240 → #06091F`), an electric-blue glow, faint particle/constellation dots,
   and a glowing podium under hero objects (logo or Nix). Used for hero sections, covers, social.
2. **Glass-on-light world** — soft lavender-white gradient background
   (`radial-gradient → #FBFCFF / #EDF1FB / #E4E9F7`) carrying **liquid-glass** cards. Used for
   content, courses, community, app UI.

**Color.** Three official colors: **Navy `#0B1240`**, **Electric Blue `#0A5BFF`**, **White**.
Blue is the single accent — links, primary buttons, focus, glows, the "payoff" word in headlines.
Navy is ink + dark surfaces. A cool blue-tinted slate ramp supplies neutrals. Amber `#F5A02A`
(Nix's beak/feet) is a *rare* warm accent only. Never introduce new hues; derive with the ramps
in `tokens/colors.css`.

**Type.** **Plus Jakarta Sans** for display/headlines = **ExtraBold (800)** with
tight tracking (−0.03em) and near-1.0 line-height; headings = Bold (700); body = **Inter** Regular/Medium
at 16px, line-height 1.5–1.65. **JetBrains Mono** for code, terminal, and numeric/metric accents.
Eyebrows are 12px, 700, uppercase, +0.14em tracking, blue.

**Backgrounds.** Gradients yes — but specific and restrained: the navy radial and the
lavender-white radial. No rainbow or purple gradients. Particle dots and a single soft blue glow
add depth on dark; light surfaces stay clean. Imagery is the 3D glossy mascot/logo on the podium.

**Liquid glass — the signature surface.** Frosted, translucent panels:
`background: rgba(255,255,255,0.55)`, `backdrop-blur(18px) saturate(1.4)`, a **white hairline
border** (`rgba(255,255,255,0.85)`), a **glossy diagonal top-edge highlight** (the
`::before` sheen), and a **soft navy-tinted drop shadow** (never pure black). On navy, the same
treatment uses `rgba(255,255,255,0.07)` fills. Modules are often joined by **glass "tube"
connectors** (`.av-tube`) — pill pipes with an inner blue liquid glow — and numbered step circles.

**Corner radii.** Generous and rounded: cards `20px` (`--radius-lg`), hero glass panels `28px`,
controls `10–14px`, and **pills (`999px`)** for buttons, badges, tabs, and status capsules.

**Shadows / elevation.** Soft, cool, **navy-tinted** (`rgba(11,18,64,…)`), never black. Glass
cards pair a soft drop shadow with an `inset 0 1px 0 rgba(255,255,255,0.7)` top highlight. Hero
elements add the **electric-blue halo** (`--glow-soft` / `--glow-blue`).

**Borders.** Hairline. On light: `--av-slate-200`. On glass: bright white `rgba(255,255,255,0.85)`.
On navy: `rgba(255,255,255,0.12)`. Focus = 1.5px blue border + 4px soft blue ring.

**Transparency & blur.** Core to the brand — used on every glass surface and on sticky nav bars
(translucent + backdrop-blur). Reach for it deliberately (cards, nav, pills), not everywhere.

**Motion.** Smooth and slightly springy, never frantic. Standard ease `cubic-bezier(0.22,1,0.36,1)`;
toggles/knobs use a gentle spring. Durations 140/240/420ms. Fades and soft scale; **no harsh
bounces**, no infinite decorative loops on content. Respects `prefers-reduced-motion`.

**Hover / press.** Hover: subtle lift / brighter fill / slightly stronger glow. Press: scale to
~0.97 (buttons) and a touch deeper color. Primary buttons keep their blue glow throughout.

**Imagery vibe.** 3D, glossy, studio-lit, cool blue palette with the warm orange accent of Nix's
beak/feet. Clean white or navy backdrops, soft contact shadows, the recurring glowing podium.

---

## ICONOGRAPHY

Avanix uses **simple, geometric line icons** at a consistent **2px stroke**, rounded caps and
joins — the style seen throughout the brand sheets (graduation cap, gear, robot, chart, bolt,
shield). They render in **electric blue** on light surfaces, white on navy.

- **Recommended set: [Lucide](https://lucide.dev)** — its 2px rounded-stroke geometry matches the
  brand almost exactly. Use Lucide in production (`lucide-react` or the SVG CDN). No proprietary
  icon font ships with the brand, so Lucide is the documented standard. *(Substitution flagged:
  the brand sheets show bespoke 3D/line icons; Lucide is the closest open equivalent.)*
- The UI kit ships a small inline icon set in `ui_kits/avanix-web/shared.jsx` (Lucide-style) so
  the kit has zero icon dependencies — mirror that geometry if you add more.
- **App / brand mark:** the **A-monogram** (`assets/logo/`) doubles as a glyph — use `mark-*`
  PNGs or the rounded-square `app-icon-navy.png`.
- **Mascot, not emoji, for personality.** Drop a **Nix** pose (`assets/mascot/`) where you'd be
  tempted to use a big emoji. Emoji appear only inline in community copy (👋 🎉 👇), never as UI icons.
- **Unicode** is fine for tiny inline marks (·, →, ✓) but prefer the icon set for anything sized.

Do **not** hand-draw bespoke illustration SVGs — reuse the mascot renders and the glass motifs.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (imports only). Consumers link this one file.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill wrapper for Claude Code.

**Tokens** (`tokens/`, all imported by `styles.css`)
- `fonts.css` — Plus Jakarta Sans + Inter (Google Fonts) + JetBrains Mono `@import`s.
- `colors.css` — brand colors, ramps, semantic aliases, **glass system**, dark theme.
- `typography.css` — font stacks, weights, type scale, line-height & tracking.
- `spacing.css` — spacing, radii, shadows, motion, layout tokens.
- `base.css` — reset + **`.av-glass`, `.av-tube`, `.av-step`, `.av-eyebrow`** primitives.

**Components** (`components/`, React; namespace `window.AvanixDesignSystem_a5b4a8`)
- `core/` — **Button, GlassCard, Badge, Avatar, Stat**
- `forms/` — **Input, Switch, Checkbox**
- `feedback/` — **StatusPill, ProgressBar**
- `navigation/` — **Tabs**
- Each has `.jsx` + `.d.ts` + `.prompt.md`; each folder has a `*.card.html` specimen.

**UI kit** (`ui_kits/avanix-web/`)
- `index.html` — interactive: **Landing → Courses → Community** (click the nav).
- `Landing.jsx` (hero + "bốn mảnh ghép" glass diagram + stats), `Courses.jsx` (catalog),
  `Dashboard.jsx` (community feed + sidebar), `Nav.jsx`, `shared.jsx` (icons).

**Foundation cards** (`guidelines/`) — specimen `.html` for the Design System tab
(Colors, Type, Spacing, Brand).

**Assets** (`assets/`)
- `logo/` — `app-icon-navy.png`, `mark-{white,navy,blue}.png`, `lockup-{white,navy,blue}.png`, `avatar.png`
- `mascot/` — Nix: `nix-{front,three-quarter,side,back,hero,cape}.png`
- `img/` — `banner-hero.png`
