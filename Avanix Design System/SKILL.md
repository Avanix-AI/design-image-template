---
name: avanix-design
description: Use this skill to generate well-branded interfaces and assets for Avanix (AI Education & Automation community), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- **Brand**: Avanix — "AI thực chiến, ra kết quả thật" / "AI Education that works". Vietnamese-first, practical, anti-hype community ($5/mo). Mascot: **Nix** the caped penguin.
- **Colors**: Navy `#0B1240`, Electric Blue `#0A5BFF`, White. Blue is the only accent.
- **Type**: Plus Jakarta Sans (display 800 / headings 700) · Inter (body 400–500); JetBrains Mono for code.
- **Signature look**: **liquid glass** — frosted translucent cards (`.av-glass`), glass-tube connectors, navy hero gradient + blue glow + particle dots. See README "VISUAL FOUNDATIONS".
- **Entry CSS**: `styles.css` (link it; tokens live in `tokens/`).
- **Components**: `components/<group>/` (React). **UI kit**: `ui_kits/avanix-web/`.
- **Assets**: `assets/logo`, `assets/mascot` (Nix poses), `assets/img`.
- **Icons**: Lucide (2px rounded stroke) — closest match to the brand.
