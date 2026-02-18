# Brand System

> Premium visual identity, typography, spacing, tone, and component standards for Flex Human.

---

## 1. Brand Traits

Precision. Intelligence. Adaptive. Durable. Human-Centric. Scientific. Clean. Future-Oriented.

---

## 2. Color System

### Core Palette

| Token              | Hex       | Usage                                              |
| ------------------ | --------- | -------------------------------------------------- |
| `--color-black`    | `#0A0A0A` | Primary text, backgrounds (dark mode)              |
| `--color-white`    | `#FAFAFA` | Primary text (dark mode), backgrounds (light mode) |
| `--color-gray-950` | `#0D0D0D` | Dark surfaces                                      |
| `--color-gray-900` | `#171717` | Card backgrounds (dark mode)                       |
| `--color-gray-800` | `#262626` | Elevated surfaces                                  |
| `--color-gray-700` | `#404040` | Borders (dark mode)                                |
| `--color-gray-500` | `#737373` | Secondary text                                     |
| `--color-gray-400` | `#A3A3A3` | Tertiary text                                      |
| `--color-gray-200` | `#E5E5E5` | Borders (light mode)                               |
| `--color-gray-100` | `#F5F5F5` | Card backgrounds (light mode)                      |

### Accent Palette

| Token                  | Hex       | Usage                            |
| ---------------------- | --------- | -------------------------------- |
| `--color-accent`       | `#E5E5E5` | Primary accent (monochrome)      |
| `--color-accent-blue`  | `#3B82F6` | Interactive elements, links      |
| `--color-accent-green` | `#22C55E` | Success states, positive signals |
| `--color-accent-amber` | `#F59E0B` | Warning states, caution signals  |
| `--color-accent-red`   | `#EF4444` | Error states, risk indicators    |

### Mode Priority

**Dark mode is primary.** Light mode is supported but dark mode is the default and the design reference.

---

## 3. Typography

### Font Stack

| Role            | Font           | Fallback                             |
| --------------- | -------------- | ------------------------------------ |
| Headings + Body | Inter          | system-ui, -apple-system, sans-serif |
| Code + Data     | JetBrains Mono | ui-monospace, monospace              |

### Scale (Base: 16px)

| Token            | Size            | Weight | Line Height | Usage              |
| ---------------- | --------------- | ------ | ----------- | ------------------ |
| `--text-display` | 48px / 3rem     | 700    | 1.1         | Hero headlines     |
| `--text-h1`      | 36px / 2.25rem  | 700    | 1.2         | Page titles        |
| `--text-h2`      | 28px / 1.75rem  | 600    | 1.3         | Section headers    |
| `--text-h3`      | 22px / 1.375rem | 600    | 1.4         | Subsection headers |
| `--text-h4`      | 18px / 1.125rem | 600    | 1.4         | Card titles        |
| `--text-body`    | 16px / 1rem     | 400    | 1.6         | Body text          |
| `--text-body-sm` | 14px / 0.875rem | 400    | 1.5         | Secondary text     |
| `--text-caption` | 12px / 0.75rem  | 500    | 1.4         | Labels, metadata   |
| `--text-code`    | 14px / 0.875rem | 400    | 1.5         | Code blocks        |

### Rules

- Maximum 2 font weights per page section
- No font size below 12px
- Line length: 60-80 characters for body text
- Letter spacing: -0.02em for headings, normal for body

---

## 4. Spacing System

4px base grid. All spacing values are multiples of 4.

| Token        | Value | Usage                    |
| ------------ | ----- | ------------------------ |
| `--space-1`  | 4px   | Tight spacing, icon gaps |
| `--space-2`  | 8px   | Inline element gaps      |
| `--space-3`  | 12px  | Compact padding          |
| `--space-4`  | 16px  | Standard padding         |
| `--space-5`  | 20px  | Card padding             |
| `--space-6`  | 24px  | Section gaps             |
| `--space-8`  | 32px  | Component separation     |
| `--space-10` | 40px  | Section padding          |
| `--space-12` | 48px  | Large section gaps       |
| `--space-16` | 64px  | Page section separation  |
| `--space-20` | 80px  | Major section breaks     |
| `--space-24` | 96px  | Hero spacing             |

---

## 5. Layout

### Grid

- 12-column grid for desktop
- Max content width: 1280px
- Gutter: 24px (desktop), 16px (mobile)
- Page margin: 24px (desktop), 16px (mobile)

### Breakpoints

| Token     | Value  | Target           |
| --------- | ------ | ---------------- |
| `--bp-sm` | 640px  | Mobile landscape |
| `--bp-md` | 768px  | Tablet           |
| `--bp-lg` | 1024px | Desktop          |
| `--bp-xl` | 1280px | Wide desktop     |

### Border Radius

| Token           | Value  | Usage                         |
| --------------- | ------ | ----------------------------- |
| `--radius-sm`   | 4px    | Small elements (badges, tags) |
| `--radius-md`   | 8px    | Cards, inputs                 |
| `--radius-lg`   | 12px   | Modals, large cards           |
| `--radius-full` | 9999px | Pills, avatars                |

---

## 6. Component Inventory

### Core Components (packages/ui)

| Component       | Variants                                | Notes                      |
| --------------- | --------------------------------------- | -------------------------- |
| Button          | primary, secondary, ghost, danger       | Sizes: sm, md, lg          |
| Card            | default, elevated, bordered             | Padding via spacing tokens |
| Input           | text, search, textarea                  | With label + error state   |
| Badge           | default, success, warning, danger, info | Pill shape                 |
| DataTable       | sortable, paginated                     | Monospace numbers          |
| StatusIndicator | active, inactive, warning, error        | Dot + label                |
| SignalCard      | risk, opportunity, gap, alert           | Score display, confidence  |
| Sidebar         | collapsible, grouped                    | Navigation component       |
| TopBar          | with breadcrumbs                        | Page header                |

### Interaction Patterns

- Hover: subtle background shift (opacity 0.05 overlay)
- Focus: 2px accent-blue outline, 2px offset
- Active: slight scale (0.98) on buttons
- Transitions: 150ms ease-out for all interactive states
- No animations longer than 300ms

---

## 7. Tone & Copy Guidelines

### Voice

- Precise and technical, not academic
- Confident without being arrogant
- Direct, no filler words
- Active voice preferred
- Short sentences for impact, longer for explanation

### Do

- "Multi-layer polymer composite with embedded sensor mesh"
- "AI-driven defect detection at 99.2% accuracy"
- "Seamless integration over prosthetic frames"

### Don't

- "Revolutionary groundbreaking technology" (vague superlatives)
- "We're passionate about changing the world" (startup cliche)
- "Synergistic solutions for next-gen paradigms" (buzzword salad)

### CTA Style

- "Explore Technology" (not "Learn More")
- "Partner With Us" (not "Get In Touch")
- "View Research" (not "Click Here")

---

## 8. Imagery & Diagrams

- No stock photography
- Technical diagrams preferred: material cross-sections, sensor mesh layouts, process flows
- Diagrams use monochrome palette with single accent color
- All images must have alt text
- SVG preferred for diagrams, WebP for photography

---

## 9. Design Token Export Format

Design tokens exported as:

- `designTokens.ts` — TypeScript constants for programmatic use
- `tailwind.config.ts` — Tailwind theme extension
- CSS custom properties in global stylesheet

All three sources derive from a single token definition.

---

_This system governs all visual output. Deviations require design review._
