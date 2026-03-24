# Enterprise Brain — Design System Specification

> Version 1.0 · March 2026 · Enterprise AI Chat Platform

---

## Table of Contents

1. [Section 01 — Foundations / Tokens](#section-01--foundations--tokens)
   - [1.1.5 Theme Strategy — Light & Dark Mode](#115-theme-strategy--light--dark-mode)
   - [1.1.6 Light Mode Tokens](#116-light-mode-tokens-default)
   - [1.1.7 Dark Mode Tokens](#117-dark-mode-tokens)
   - [1.1.8 Component-Level Dark Mode Notes](#118-component-level-dark-mode-notes)
2. [Section 02 — Core Form Elements](#section-02--core-form-elements)
3. [Section 03 — Buttons & Actions](#section-03--buttons--actions)
4. [Section 04 — Navigation](#section-04--navigation)
5. [Section 05 — Overlays & Feedback](#section-05--overlays--feedback)
6. [Section 06 — Data Display](#section-06--data-display)
7. [Section 07 — AI / Chat Specific](#section-07--ai--chat-specific)
8. [Section 08 — Layout & Containers](#section-08--layout--containers)
9. [Section 09 — Media & Rich Content](#section-09--media--rich-content)
10. [Section 10 — Utility / Misc](#section-10--utility--misc)

---

## Section 01 — Foundations / Tokens

### 1.1 Color Tokens

#### Semantic Colors

```css
/* Primary */
--color-primary:           #6459fe;   /* color/blue/67 */
--color-primary-hover:     #5149de;   /* color/blue/58 */
--color-primary-active:    #3c2cb8;   /* color/blue/45 */
--color-primary-subtle:    #0a12170d; /* color/azure/6 5% */
--color-primary-muted:     #0a121799; /* color/azure/6 60% */

/* Secondary */
--color-secondary:         #8282ff;   /* color/blue/75 */
--color-secondary-hover:   #6868f7;   /* color/blue/69 */
--color-secondary-active:  #5f50e2;   /* color/blue/60 */

/* Destructive */
--color-destructive:       #e94235;   /* color/red/56 */
--color-destructive-hover: #c0392b;
--color-destructive-subtle:#fdecea;

/* Warning */
--color-warning:           #ffba00;   /* color/orange/50 */
--color-warning-hover:     #e6a800;
--color-warning-subtle:    #fff8e1;

/* Success */
--color-success:           #34a853;   /* color/spring green/43 */
--color-success-hover:     #2d9248;
--color-success-subtle:    #e8f5e9;
--color-success-secondary: #17b26a;   /* Colors/Foreground/fg-success-secondary */

/* Info */
--color-info:              #4285f4;   /* color/azure/61 */
--color-info-hover:        #1967d2;   /* color/azure/46 */
--color-info-subtle:       #e8f0fe;
```

#### Surface / Background Colors

```css
--color-bg-primary:        #ffffff;   /* Colors/Background/bg-primary */
--color-bg-secondary:      #f9fafb;
--color-bg-tertiary:       #f3f4f6;
--color-bg-active:         #fafafa;   /* Colors/Background/bg-active */
--color-bg-disabled:       #f3f4f6;
--color-bg-overlay:        rgba(10,13,18,0.5);
--color-bg-inset:          #f0f2f5;
```

#### Foreground / Text Colors

```css
--color-fg-primary:        #0a1217;   /* color/azure/6 */
--color-fg-secondary:      #4b5563;
--color-fg-tertiary:       #717680;   /* Colors/Foreground/fg-quaternary_hover */
--color-fg-quaternary:     #a4a7ae;   /* Colors/Foreground/fg-quaternary (400) */
--color-fg-disabled:       #d1d5db;
--color-fg-on-color:       #ffffff;   /* color/white/solid */
--color-fg-success:        #17b26a;   /* Colors/Foreground/fg-success-secondary */
--color-fg-destructive:    #e94235;
--color-fg-warning:        #ffba00;
--color-fg-info:           #4285f4;
```

#### Border Colors

```css
--color-border-primary:    #d1d5db;
--color-border-secondary:  #e9eaeb;   /* Colors/Border/border-secondary */
--color-border-tertiary:   #f3f4f6;
--color-border-focus:      #6459fe;   /* color/blue/67 — matches primary */
--color-border-error:      #e94235;   /* color/red/56 */
--color-border-success:    #34a853;
```

#### Brand Primitive Palette

| Token | Hex | Usage |
|---|---|---|
| `--primitive-blue-32` | `#230f94` | Deepest blue, dark-mode accent |
| `--primitive-blue-42` | `#3923b1` | Dark interactive state |
| `--primitive-blue-45` | `#3c2cb8` | Active/pressed primary |
| `--primitive-blue-58` | `#5149de` | Hover primary |
| `--primitive-blue-60` | `#5f50e2` | Secondary hover |
| `--primitive-blue-67` | `#6459fe` | Primary action |
| `--primitive-blue-68-0` | `#6965f600` | Gradient start (transparent) |
| `--primitive-blue-69` | `#6868f7` | Secondary active |
| `--primitive-blue-75` | `#8282ff` | Secondary default |
| `--primitive-blue-78` | `#8f8fff` | Muted accent |
| `--primitive-blue-81-0` | `#9fa2ff00` | Gradient end (transparent) |
| `--primitive-violet-77` | `#a98aff` | Violet accent |
| `--primitive-violet-79` | `#bd96ff` | Lighter violet |
| `--primitive-violet-79-0` | `#bd96ff00` | Gradient transparent |
| `--primitive-violet-83` | `#e3acfd` | Softest violet |
| `--primitive-azure-46` | `#1967d2` | Info hover |
| `--primitive-azure-57` | `#2684fc` | Info active |
| `--primitive-azure-61` | `#4285f4` | Info default |
| `--primitive-azure-70` | `#688eff` | Info light |
| `--primitive-azure-76` | `#85c2ff` | Lighter azure |
| `--primitive-azure-82` | `#a1d3ff` | Softest azure |
| `--primitive-azure-82-0` | `#a1d3ff00` | Gradient transparent |
| `--primitive-azure-43` | `#0066da` | Azure deep |
| `--primitive-red-56` | `#e94235` | Destructive |
| `--primitive-green-26` | `#00832d` | Deep success |
| `--primitive-green-30` | `#188038` | Dark success |
| `--primitive-green-34` | `#00ac47` | Success accent |
| `--primitive-green-43` | `#34a853` | Success default |
| `--primitive-orange-50` | `#ffba00` | Warning |
| `--primitive-azure-6` | `#0a1217` | Near-black text |
| `--primitive-white` | `#ffffff` | Pure white |
| `--primitive-black` | `#000000` | Pure black |

---

### 1.1.5 Theme Strategy — Light & Dark Mode

Enterprise Brain ships two fully-specified themes. Semantic tokens (e.g. `--color-bg-primary`) stay the same in both themes; only their resolved values change. Primitive tokens never change.

**Switching mechanism:**

```html
<!-- default: light -->
<html data-theme="light">

<!-- dark -->
<html data-theme="dark">

<!-- system preference auto-switch -->
<html>  <!-- relies on @media (prefers-color-scheme) -->
```

```css
/* Auto-follow OS preference, override with data-theme attribute */
:root                        { /* light tokens — see below */ }
[data-theme="dark"]          { /* dark overrides — see below */ }

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* dark overrides */ }
}
```

---

### 1.1.6 Light Mode Tokens (Default)

All values already defined in 1.1.1–1.1.4. Reproduced as a single `:root` block for clarity:

```css
:root {
  /* --- Semantic --- */
  --color-primary:            #6459fe;
  --color-primary-hover:      #5149de;
  --color-primary-active:     #3c2cb8;
  --color-primary-subtle:     #0a12170d;
  --color-primary-muted:      #0a121799;

  --color-secondary:          #8282ff;
  --color-secondary-hover:    #6868f7;
  --color-secondary-active:   #5f50e2;

  --color-destructive:        #e94235;
  --color-destructive-hover:  #c0392b;
  --color-destructive-subtle: #fdecea;

  --color-warning:            #ffba00;
  --color-warning-hover:      #e6a800;
  --color-warning-subtle:     #fff8e1;

  --color-success:            #34a853;
  --color-success-hover:      #2d9248;
  --color-success-subtle:     #e8f5e9;
  --color-success-secondary:  #17b26a;

  --color-info:               #4285f4;
  --color-info-hover:         #1967d2;
  --color-info-subtle:        #e8f0fe;

  /* --- Surface --- */
  --color-bg-primary:         #ffffff;
  --color-bg-secondary:       #f9fafb;
  --color-bg-tertiary:        #f3f4f6;
  --color-bg-active:          #fafafa;
  --color-bg-disabled:        #f3f4f6;
  --color-bg-overlay:         rgba(10, 13, 18, 0.50);
  --color-bg-inset:           #f0f2f5;

  /* --- Foreground / Text --- */
  --color-fg-primary:         #0a1217;
  --color-fg-secondary:       #4b5563;
  --color-fg-tertiary:        #717680;
  --color-fg-quaternary:      #a4a7ae;
  --color-fg-disabled:        #d1d5db;
  --color-fg-on-color:        #ffffff;
  --color-fg-success:         #17b26a;
  --color-fg-destructive:     #e94235;
  --color-fg-warning:         #ffba00;
  --color-fg-info:            #4285f4;

  /* --- Border --- */
  --color-border-primary:     #d1d5db;
  --color-border-secondary:   #e9eaeb;
  --color-border-tertiary:    #f3f4f6;
  --color-border-focus:       #6459fe;
  --color-border-error:       #e94235;
  --color-border-success:     #34a853;

  /* --- Shadows --- */
  --shadow-xs:  0px 1px 2px 0px rgba(10, 13, 18, 0.05);
  --shadow-sm:  0px 1px 3px 0px rgba(10, 13, 18, 0.10), 0px 1px 2px -1px rgba(10, 13, 18, 0.10);
  --shadow-md:  0px 4px 6px -1px rgba(10, 13, 18, 0.10), 0px 2px 4px -2px rgba(10, 13, 18, 0.10);
  --shadow-lg:  0px 10px 15px -3px rgba(10, 13, 18, 0.10), 0px 4px 6px -4px rgba(10, 13, 18, 0.10);
  --shadow-xl:  0px 20px 25px -5px rgba(10, 13, 18, 0.10), 0px 8px 10px -6px rgba(10, 13, 18, 0.10);

  /* --- AI / Glow Effects --- */
  --glow-primary:             0px 0px 16px 0px rgba(100, 89, 254, 0.30);
  --glow-streaming:           0px 0px 8px  0px rgba(100, 89, 254, 0.20);
}
```

---

### 1.1.7 Dark Mode Tokens

Dark mode uses a deep near-black base (`#0c0e12`) derived from the `color/azure/6` primitive, keeping the brand's azure undertone. Surfaces are layered in steps of ~5% lightness. Accent colors shift toward lighter palette stops (e.g. primary moves from `blue/67` → `blue/75`) to maintain contrast against dark surfaces.

**Mapping logic:**

| Role | Light value | Dark value | Reasoning |
|---|---|---|---|
| `bg-primary` | `#ffffff` | `#0c0e12` | Deepest surface |
| `bg-secondary` | `#f9fafb` | `#141720` | Raised surface |
| `bg-tertiary` | `#f3f4f6` | `#1c2028` | Elevated surface |
| `bg-active` | `#fafafa` | `#1e2230` | Hover/selected state |
| `fg-primary` | `#0a1217` | `#f0f2f5` | Near-white on dark |
| `fg-secondary` | `#4b5563` | `#a4a7ae` | Muted on dark |
| `fg-quaternary` | `#a4a7ae` | `#4b5563` | Inverse muted |
| `border-primary` | `#d1d5db` | `#2a2f3a` | Subtle divider |
| `border-secondary` | `#e9eaeb` | `#1f2430` | Ghost divider |
| `color-primary` | `#6459fe` | `#8282ff` | Lighter stop for contrast |
| `color-primary-hover` | `#5149de` | `#6868f7` | Hover — still lighter |
| `color-primary-subtle` | `#0a12170d` | `rgba(130,130,255,0.12)` | Tinted bg on dark |

```css
[data-theme="dark"],
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {

    /* --- Semantic --- */
    --color-primary:            #8282ff;   /* blue/75 — lighter for dark contrast */
    --color-primary-hover:      #6868f7;   /* blue/69 */
    --color-primary-active:     #6459fe;   /* blue/67 */
    --color-primary-subtle:     rgba(130, 130, 255, 0.12);
    --color-primary-muted:      rgba(130, 130, 255, 0.40);

    --color-secondary:          #a98aff;   /* violet/77 */
    --color-secondary-hover:    #bd96ff;   /* violet/79 */
    --color-secondary-active:   #8282ff;   /* blue/75 */

    --color-destructive:        #f87171;   /* red lightened for dark bg */
    --color-destructive-hover:  #fca5a5;
    --color-destructive-subtle: rgba(248, 113, 113, 0.12);

    --color-warning:            #fbbf24;
    --color-warning-hover:      #fcd34d;
    --color-warning-subtle:     rgba(251, 191, 36, 0.12);

    --color-success:            #34d399;   /* emerald — lighter for dark */
    --color-success-hover:      #6ee7b7;
    --color-success-subtle:     rgba(52, 211, 153, 0.12);
    --color-success-secondary:  #17b26a;

    --color-info:               #85c2ff;   /* azure/76 */
    --color-info-hover:         #a1d3ff;   /* azure/82 */
    --color-info-subtle:        rgba(133, 194, 255, 0.12);

    /* --- Surface --- */
    --color-bg-primary:         #0c0e12;   /* deepest layer */
    --color-bg-secondary:       #141720;   /* cards, panels */
    --color-bg-tertiary:        #1c2028;   /* elevated panels */
    --color-bg-active:          #1e2230;   /* hover / selected */
    --color-bg-disabled:        #1a1d25;
    --color-bg-overlay:         rgba(0, 0, 0, 0.70);
    --color-bg-inset:           #10131a;   /* inputs, code blocks */

    /* --- Foreground / Text --- */
    --color-fg-primary:         #f0f2f5;   /* near-white */
    --color-fg-secondary:       #c8ccd4;
    --color-fg-tertiary:        #8c909a;
    --color-fg-quaternary:      #4b5563;
    --color-fg-disabled:        #2a2f3a;
    --color-fg-on-color:        #ffffff;
    --color-fg-success:         #34d399;
    --color-fg-destructive:     #f87171;
    --color-fg-warning:         #fbbf24;
    --color-fg-info:            #85c2ff;

    /* --- Border --- */
    --color-border-primary:     #2a2f3a;
    --color-border-secondary:   #1f2430;
    --color-border-tertiary:    #161a22;
    --color-border-focus:       #8282ff;   /* blue/75 — visible on dark */
    --color-border-error:       #f87171;
    --color-border-success:     #34d399;

    /* --- Shadows (more opaque on dark — reversed luminosity) --- */
    --shadow-xs:  0px 1px 2px 0px rgba(0, 0, 0, 0.30);
    --shadow-sm:  0px 1px 3px 0px rgba(0, 0, 0, 0.40), 0px 1px 2px -1px rgba(0, 0, 0, 0.40);
    --shadow-md:  0px 4px 6px -1px rgba(0, 0, 0, 0.40), 0px 2px 4px -2px rgba(0, 0, 0, 0.40);
    --shadow-lg:  0px 10px 15px -3px rgba(0, 0, 0, 0.40), 0px 4px 6px -4px rgba(0, 0, 0, 0.40);
    --shadow-xl:  0px 20px 25px -5px rgba(0, 0, 0, 0.40), 0px 8px 10px -6px rgba(0, 0, 0, 0.40);

    /* --- AI / Glow Effects (stronger on dark) --- */
    --glow-primary:             0px 0px 20px 0px rgba(130, 130, 255, 0.45);
    --glow-streaming:           0px 0px 10px 0px rgba(130, 130, 255, 0.30);
  }
}
```

---

### 1.1.8 Component-Level Dark Mode Notes

Key components that need special dark treatment beyond token swaps:

#### Chat Bubbles

| Property | Light | Dark |
|---|---|---|
| User bubble bg | `#6459fe` | `#8282ff` |
| User bubble text | `#ffffff` | `#ffffff` |
| Assistant bubble bg | `--color-bg-secondary` `#f9fafb` | `--color-bg-secondary` `#141720` |
| Assistant bubble text | `--color-fg-primary` | `--color-fg-primary` |
| Streaming cursor | `#6459fe` | `#8282ff` |

#### Sidebar / Navigation Rail

| Property | Light | Dark |
|---|---|---|
| Background | `#ffffff` | `#0c0e12` |
| Active item bg | `#f3f4f6` | `#1c2028` |
| Active item indicator | `#6459fe` | `#8282ff` |
| Icon default | `#a4a7ae` | `#4b5563` |
| Icon active | `#6459fe` | `#8282ff` |
| Border right | `#e9eaeb` | `#1f2430` |

#### Input / Chat Input Bar

| Property | Light | Dark |
|---|---|---|
| Background | `#ffffff` | `#141720` |
| Border | `#e9eaeb` | `#2a2f3a` |
| Border focus | `#6459fe` | `#8282ff` |
| Placeholder text | `#a4a7ae` | `#4b5563` |
| Send button bg | `#6459fe` | `#8282ff` |

#### Code Blocks

| Property | Light | Dark |
|---|---|---|
| Background | `#f3f4f6` | `#10131a` |
| Border | `#e9eaeb` | `#1f2430` |
| Text | `#0a1217` | `#e3e8f0` |
| Keyword | `#6459fe` | `#a98aff` |
| String | `#188038` | `#34d399` |
| Comment | `#a4a7ae` | `#4b5563` |
| Number | `#e94235` | `#f87171` |

#### Cards / Panels

| Property | Light | Dark |
|---|---|---|
| Background | `#ffffff` | `#141720` |
| Border | `#e9eaeb` | `#1f2430` |
| Shadow | `--shadow-sm` light values | `--shadow-sm` dark values |
| Header bg | `#f9fafb` | `#1c2028` |

#### Modal / Dialog

| Property | Light | Dark |
|---|---|---|
| Backdrop | `rgba(10,13,18,0.50)` | `rgba(0,0,0,0.70)` |
| Background | `#ffffff` | `#141720` |
| Border | `#e9eaeb` | `#2a2f3a` |

#### Suggested Prompt Chips

| Property | Light | Dark |
|---|---|---|
| Background | `#f9fafb` | `#1c2028` |
| Border | `#e9eaeb` | `#2a2f3a` |
| Text | `#4b5563` | `#c8ccd4` |
| Hover bg | `#f3f4f6` | `#1e2230` |
| Hover border | `#d1d5db` | `#3a3f4a` |

#### Toast / Snackbar

| Property | Light | Dark |
|---|---|---|
| Background | `#0a1217` | `#f0f2f5` |
| Text | `#ffffff` | `#0c0e12` |
| Info accent | `#4285f4` | `#85c2ff` |
| Success accent | `#34a853` | `#34d399` |
| Warning accent | `#ffba00` | `#fbbf24` |
| Error accent | `#e94235` | `#f87171` |

> **Note on toasts:** On light, toast uses an inverted (dark) background for contrast with the page. On dark, it flips to a light background — same inversion principle.

#### Agent Step Card

| Property | Light | Dark |
|---|---|---|
| Background | `#ffffff` | `#141720` |
| Running border | `#6459fe` | `#8282ff` |
| Running glow | `--glow-primary` light | `--glow-primary` dark |
| Done bg | `#e8f5e9` | `rgba(52,211,153,0.08)` |
| Error bg | `#fdecea` | `rgba(248,113,113,0.08)` |

---

### 1.1.9 Dark Mode Scrollbars

```css
/* Webkit scrollbars */
[data-theme="dark"] ::-webkit-scrollbar        { width: 6px; height: 6px; }
[data-theme="dark"] ::-webkit-scrollbar-track  { background: #0c0e12; }
[data-theme="dark"] ::-webkit-scrollbar-thumb  { background: #2a2f3a; border-radius: 9999px; }
[data-theme="dark"] ::-webkit-scrollbar-thumb:hover { background: #3a3f4a; }

/* Firefox */
[data-theme="dark"] * {
  scrollbar-color: #2a2f3a #0c0e12;
  scrollbar-width: thin;
}
```

---

### 1.1.10 Reduced Motion + Dark Mode

```css
@media (prefers-color-scheme: dark) and (prefers-reduced-motion: reduce) {
  /* Disable streaming cursor blink */
  .streaming-cursor { animation: none; opacity: 1; }
  /* Disable skeleton shimmer */
  .skeleton { animation: none; background: var(--color-bg-tertiary); }
  /* Disable glow pulses */
  .agent-step--running { animation: none; box-shadow: none; }
}
```

---

### 1.2 Typography Scale

**Font Families**

```css
--font-family-sans:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-mono:  'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
--font-family-serif: 'Georgia', 'Times New Roman', serif;
```

**Type Scale**

| Token | Size | Line Height | Usage |
|---|---|---|---|
| `--text-xs` | 10px | 14px | Labels, captions, badges |
| `--text-sm` | 12px | 16px | Helper text, metadata |
| `--text-base` | 14px | 19.6px | Body text, chat messages |
| `--text-md` | 16px | 24px | Subheadings, form labels |
| `--text-lg` | 18px | 28px | Section headings |
| `--text-xl` | 20px | 30px | Page headings |
| `--text-2xl` | 24px | 32px | Display small |
| `--text-3xl` | 30px | 38px | Display medium |
| `--text-4xl` | 36px | 44px | Display large |

```css
--text-xs:    10px;
--text-sm:    12px;
--text-base:  14px;
--text-md:    16px;
--text-lg:    18px;
--text-xl:    20px;
--text-2xl:   24px;
--text-3xl:   30px;
--text-4xl:   36px;

--leading-xs:   14px;
--leading-sm:   16px;
--leading-base: 19.6px;  /* line height/19_6 */
--leading-md:   24px;    /* line height/24 */
--leading-lg:   28px;
--leading-xl:   30px;
--leading-2xl:  32px;
--leading-3xl:  38px;
--leading-4xl:  44px;

--font-weight-regular:   400;   /* font weight/400 */
--font-weight-medium:    500;
--font-weight-semibold:  600;
--font-weight-bold:      700;
```

**Semantic Text Roles**

| Role | Size | Weight | Line Height | Color |
|---|---|---|---|---|
| Display | 36px | 700 | 44px | `--color-fg-primary` |
| Heading 1 | 30px | 700 | 38px | `--color-fg-primary` |
| Heading 2 | 24px | 600 | 32px | `--color-fg-primary` |
| Heading 3 | 20px | 600 | 30px | `--color-fg-primary` |
| Heading 4 | 18px | 600 | 28px | `--color-fg-primary` |
| Heading 5 | 16px | 600 | 24px | `--color-fg-primary` |
| Body Large | 16px | 400 | 24px | `--color-fg-primary` |
| Body | 14px | 400 | 19.6px | `--color-fg-primary` |
| Body Small | 12px | 400 | 16px | `--color-fg-secondary` |
| Caption | 10px | 400 | 14px | `--color-fg-quaternary` |
| Code | 13px | 400 | 20px | `--color-fg-primary` (mono) |
| Label | 12px | 500 | 16px | `--color-fg-secondary` |

---

### 1.3 Spacing

Based on a 4px base grid with named tokens from Figma.

```css
--spacing-0:    0px;
--spacing-xxs:  2px;    /* spacing-xxs */
--spacing-xs:   4px;    /* spacing-xs */
--spacing-sm:   6px;
--spacing-md:   8px;    /* spacing-md */
--spacing-lg:   12px;   /* spacing-lg */
--spacing-xl:   16px;   /* spacing-xl */
--spacing-2xl:  20px;   /* spacing-2xl */
--spacing-3xl:  24px;
--spacing-4xl:  32px;
--spacing-5xl:  40px;
--spacing-6xl:  48px;
--spacing-7xl:  56px;
--spacing-8xl:  64px;

/* Item spacing (for gap/stack layouts) */
--item-spacing-xs:  8px;   /* item spacing/xs */
--item-spacing-s:   16px;  /* item spacing/s */
--item-spacing-12:  12px;  /* item spacing/12 */
```

**Spacing Scale Reference**

| Token | px | rem | Usage |
|---|---|---|---|
| `--spacing-xxs` | 2px | 0.125rem | Micro gaps, icon nudges |
| `--spacing-xs` | 4px | 0.25rem | Tight padding, inline gaps |
| `--spacing-sm` | 6px | 0.375rem | Badge padding, compact items |
| `--spacing-md` | 8px | 0.5rem | Default element padding |
| `--spacing-lg` | 12px | 0.75rem | Card inner padding |
| `--spacing-xl` | 16px | 1rem | Section gaps, button padding |
| `--spacing-2xl` | 20px | 1.25rem | Card padding |
| `--spacing-3xl` | 24px | 1.5rem | Section separation |
| `--spacing-4xl` | 32px | 2rem | Page margins, large gaps |
| `--spacing-5xl` | 40px | 2.5rem | Hero spacing |
| `--spacing-6xl` | 48px | 3rem | Layout section breaks |
| `--spacing-7xl` | 56px | 3.5rem | Nav bar height |
| `--spacing-8xl` | 64px | 4rem | Page-level padding |

---

### 1.4 Border Radius

```css
--radius-none:  0px;
--radius-xs:    2px;
--radius-sm:    6px;     /* radius-sm */
--radius-md:    8px;
--radius-lg:    12px;
--radius-xl:    16px;
--radius-2xl:   20px;
--radius-32:    32px;    /* radius/32 */
--radius-full:  9999px;  /* radius-full */
```

| Token | Value | Usage |
|---|---|---|
| `--radius-none` | 0px | Tables, full-width elements |
| `--radius-xs` | 2px | Inline code, micro chips |
| `--radius-sm` | 6px | Inputs, buttons, cards default |
| `--radius-md` | 8px | Cards, panels |
| `--radius-lg` | 12px | Modals, drawers, large cards |
| `--radius-xl` | 16px | Feature cards, popovers |
| `--radius-2xl` | 20px | Hero cards, chat bubbles |
| `--radius-32` | 32px | Chat input bar, pill buttons |
| `--radius-full` | 9999px | Avatars, badges, toggles |

---

### 1.5 Shadows

```css
--shadow-none:  none;
--shadow-xs:    0px 1px 2px 0px #0a0d120d;    /* Shadows/shadow-xs */
--shadow-sm:    0px 1px 3px 0px #0a0d1214, 0px 1px 2px -1px #0a0d1214;
--shadow-md:    0px 4px 6px -1px #0a0d1214, 0px 2px 4px -2px #0a0d1214;
--shadow-lg:    0px 10px 15px -3px #0a0d1214, 0px 4px 6px -4px #0a0d1214;
--shadow-xl:    0px 20px 25px -5px #0a0d1214, 0px 8px 10px -6px #0a0d1214;
--shadow-2xl:   0px 25px 50px -12px #0a0d1240;
--shadow-inner: inset 0px 2px 4px 0px #0a0d120d;
```

| Token | Offset | Blur | Spread | Usage |
|---|---|---|---|---|
| `--shadow-none` | — | — | — | Flat elements |
| `--shadow-xs` | 0,1 | 2px | 0 | Cards, inputs, dropdowns |
| `--shadow-sm` | 0,1 | 3px | 0 | Elevated cards |
| `--shadow-md` | 0,4 | 6px | -1 | Popovers, menus |
| `--shadow-lg` | 0,10 | 15px | -3 | Modals, drawers |
| `--shadow-xl` | 0,20 | 25px | -5 | Full-page overlays |
| `--shadow-inner` | inset 0,2 | 4px | 0 | Input focus inset, wells |

---

### 1.6 Icons

**Library: [Untitled UI Icons](https://www.untitledui.com/icons)**

Untitled UI Icons is the icon library for Enterprise Brain. It ships 1,100+ free line icons and 4,600+ PRO icons across 4 styles, organized in 19 categories, optimized SVG output, 2px stroke weight by default.

#### Packages

| Tier | Package | Icons | Styles |
|---|---|---|---|
| Free | `@untitledui/icons` | 1,100+ | Line only |
| PRO | `@untitledui-pro/icons` | 4,600+ | Line, Solid, Duocolor, Duotone |

```bash
# Free
npm install @untitledui/icons

# PRO (requires auth token in .npmrc)
# .npmrc:
# @untitledui-pro:registry=https://pkg.untitledui.com
# //pkg.untitledui.com/:_authToken=YOUR_TOKEN_HERE
npm install @untitledui-pro/icons
```

#### Importing Icons

```tsx
// Free — line style
import { Home01, SearchMd, Settings01 } from "@untitledui/icons";

// PRO — line (default)
import { Home01, Settings01 } from "@untitledui-pro/icons/line";

// PRO — solid
import { Home01, Settings01 } from "@untitledui-pro/icons/solid";

// PRO — duocolor
import { Home01, Settings01 } from "@untitledui-pro/icons/duocolor";

// PRO — duotone
import { Home01, Settings01 } from "@untitledui-pro/icons/duotone";
```

#### Usage & Props

```tsx
import { Home01 } from "@untitledui/icons";

// Basic usage
<Home01 className="size-5 text-gray-500" aria-hidden="true" />

// Custom stroke width
<Home01 className="size-6" strokeWidth={1.5} />

// With explicit color
<Home01 className="size-5" color="currentColor" />

// Accessible icon button (no label visible)
<button aria-label="Go home">
  <Home01 className="size-5" aria-hidden="true" />
</button>
```

**Supported props:** `className`, `strokeWidth`, `color`, `aria-hidden`, and all standard SVG/React props.

#### Size Tokens

```css
--icon-size-xs:   12px;   /* Tiny indicators, status dots */
--icon-size-sm:   16px;   /* Inline text, compact rows */
--icon-size-md:   20px;   /* Buttons, nav items, inputs — default */
--icon-size-lg:   24px;   /* Primary nav, headers */
--icon-size-xl:   32px;   /* Feature icons, empty states */
--icon-size-2xl:  48px;   /* Illustrations, onboarding */
```

#### Stroke Weight Tokens

```css
--icon-stroke-default: 2px;    /* Untitled UI default — visually balanced */
--icon-stroke-light:   1.5px;  /* Subtle / secondary contexts */
--icon-stroke-thin:    1px;    /* stroke weight/1 — from Figma variables */
```

#### Size + Stroke Usage Guide

| Token | Size | Stroke | Tailwind class | Context |
|---|---|---|---|---|
| `xs` | 12px | 1px | `size-3` | Badge indicators, status dots |
| `sm` | 16px | 1.5px | `size-4` | Inline text icons, metadata rows |
| `md` | 20px | 2px | `size-5` | Buttons, nav rail, form prefix/suffix |
| `lg` | 24px | 2px | `size-6` | Page headers, sidebar items |
| `xl` | 32px | 2px | `size-8` | Feature icons, empty state illustrations |
| `2xl` | 48px | 2px | `size-12` | Onboarding, hero illustrations |

#### Icon Style Guide

| Style | Import path | When to use |
|---|---|---|
| **Line** | `/line` or default | All UI — primary style for Enterprise Brain |
| **Solid** | `/solid` | Active/selected states, filled badges, toggle-on |
| **Duocolor** | `/duocolor` | Marketing, feature callouts, empty states |
| **Duotone** | `/duotone` | Rich illustrations, onboarding screens |

#### Naming Convention

Icons follow the pattern `{Name}{Variant}` in PascalCase with a numeric suffix for variants:

```text
Home01, Home02         → home icon variants
SearchMd, SearchSm     → search with size descriptor
ChevronDown, ChevronUp → directional arrows
ArrowLeft, ArrowRight  → navigation arrows
Settings01, Settings02 → settings variants
```

#### Component → Icon Mapping

Key icon assignments for Enterprise Brain components:

| Component | Icon | Size |
|---|---|---|
| New chat button | `Edit05` | `md` (20px) |
| Chat send button | `Send01` | `md` (20px) |
| Search input | `SearchMd` | `md` (20px) |
| Clear input | `XClose` | `sm` (16px) |
| Attach file | `Paperclip` | `md` (20px) |
| Voice input | `Microphone01` | `md` (20px) |
| Stop generation | `Square` | `md` (20px) |
| Regenerate | `RefreshCw01` | `md` (20px) |
| Copy response | `Copy01` | `sm` (16px) |
| Thumbs up | `ThumbsUp` | `sm` (16px) |
| Thumbs down | `ThumbsDown` | `sm` (16px) |
| Model selector | `ChevronDown` | `sm` (16px) |
| Sidebar toggle | `Menu01` | `md` (20px) |
| Close / dismiss | `XClose` | `sm` (16px) |
| Settings | `Settings01` | `md` (20px) |
| User avatar fallback | `User01` | `md` (20px) |
| AI / bot avatar | `Stars01` or `Cpu01` | `md` (20px) |
| Tool call — search | `SearchMd` | `sm` (16px) |
| Tool call — code | `Code01` | `sm` (16px) |
| Tool call — file | `File05` | `sm` (16px) |
| Source citation | `Link01` | `sm` (16px) |
| Thinking block | `BracketsEllipses` | `sm` (16px) |
| Upload file | `UploadCloud01` | `lg` (24px) |
| Success state | `CheckCircle` | `lg` (24px) |
| Error state | `AlertCircle` | `lg` (24px) |
| Warning state | `AlertTriangle` | `lg` (24px) |
| Info state | `InfoCircle` | `lg` (24px) |
| Empty state | `Inbox01` | `xl` (32px) |
| Home nav | `Home01` | `md` (20px) |
| History / conversations | `ClockRewind` | `md` (20px) |
| Memory / context | `Brain` | `md` (20px) |
| Help | `HelpCircle` | `md` (20px) |
| Keyboard shortcut | `Keyboard01` | `sm` (16px) |
| Command palette | `SearchMd` | `md` (20px) |

#### Accessibility Rules

- **Decorative icons:** always add `aria-hidden="true"`
- **Standalone icon buttons:** always add `aria-label` on the `<button>`, `aria-hidden="true"` on the icon
- **Icons with visible label:** `aria-hidden="true"` on icon; label carries the meaning
- **Color:** never use icon color as the sole status indicator — pair with text or shape

---

### 1.7 Motion

```css
/* Durations */
--duration-instant:  0ms;
--duration-fast:     100ms;
--duration-base:     200ms;
--duration-slow:     400ms;
--duration-slower:   600ms;

/* Easings */
--ease-in:       cubic-bezier(0.4, 0, 1, 1);
--ease-out:      cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-linear:   linear;
```

**Motion Usage Guidelines**

| Scenario | Duration | Easing |
|---|---|---|
| Hover state color/opacity | 100ms | ease-out |
| Button press | 100ms | ease-in |
| Dropdown open | 200ms | ease-out |
| Modal enter | 200ms | ease-out |
| Modal exit | 150ms | ease-in |
| Drawer slide | 300ms | ease-in-out |
| Toast enter | 200ms | ease-spring |
| Page transition | 400ms | ease-in-out |
| Skeleton shimmer | 1500ms | ease-in-out (loop) |
| Streaming text cursor | 600ms | ease-in-out (blink) |

> Respect `prefers-reduced-motion`: set all durations to 0ms when active.

---

### 1.8 Z-Index Scale

```css
--z-base:       0;
--z-raised:     100;
--z-dropdown:   1000;
--z-sticky:     1100;
--z-overlay:    1200;
--z-modal:      1300;
--z-toast:      1400;
--z-tooltip:    1500;
--z-spotlight:  1600;
```

---

### 1.9 Stroke Weights

```css
--stroke-weight-thin:    0.667px;  /* stroke weight/0_67 */
--stroke-weight-light:   0.8px;    /* stroke weight/0_8 */
--stroke-weight-default: 1px;      /* stroke weight/1 */
--stroke-weight-medium:  1.5px;
--stroke-weight-thick:   2px;
```

---

### 1.10 Opacity

```css
--opacity-0:    0;
--opacity-20:   0.2;    /* opacity/20 */
--opacity-50:   0.5;
--opacity-75:   0.75;
--opacity-100:  1;      /* opacity/100 */
```

---

### 1.11 Layout Constants

```css
--width-chat-max:        868px;   /* width/868 — max chat column width */
--height-nav:            56px;    /* height/56 — nav bar height */
--height-chat-input-min: 56px;
--height-chat-input-max: 200px;   /* height/200 — max textarea height */
--sidebar-width-collapsed: 64px;
--sidebar-width-expanded:  260px;
```

---

## Section 02 — Core Form Elements

### 2.1 Text Input

**Anatomy:** Container > Label > Input field (prefix icon? | placeholder | suffix icon?) > Helper text / Error message

**Variants & States**

| State | Background | Border | Text | Notes |
|---|---|---|---|---|
| Default | `--color-bg-primary` | `--color-border-secondary` | `--color-fg-primary` | Resting state |
| Hover | `--color-bg-primary` | `--color-border-primary` | `--color-fg-primary` | Subtle border darkening |
| Focus | `--color-bg-primary` | `--color-border-focus` | `--color-fg-primary` | 2px ring `--color-primary` at 20% opacity |
| Filled | `--color-bg-primary` | `--color-border-secondary` | `--color-fg-primary` | Has user value |
| Error | `--color-bg-primary` | `--color-border-error` | `--color-fg-primary` | Error message below |
| Success | `--color-bg-primary` | `--color-border-success` | `--color-fg-primary` | Success icon trailing |
| Disabled | `--color-bg-disabled` | `--color-border-tertiary` | `--color-fg-disabled` | `cursor: not-allowed` |
| Read-only | `--color-bg-active` | `--color-border-secondary` | `--color-fg-secondary` | Non-editable |

**Sizes**

| Size | Height | Padding H | Font Size | Radius |
|---|---|---|---|---|
| sm | 32px | 10px | 12px | `--radius-sm` |
| md | 40px | 14px | 14px | `--radius-sm` |
| lg | 48px | 16px | 16px | `--radius-md` |

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | sm \| md \| lg | md | Input size variant |
| `label` | string | — | Visible label text |
| `placeholder` | string | — | Placeholder text |
| `value` | string | — | Controlled value |
| `error` | string | — | Error message |
| `helper` | string | — | Helper text below |
| `prefix` | ReactNode | — | Icon or text prefix |
| `suffix` | ReactNode | — | Icon or text suffix |
| `disabled` | boolean | false | Disabled state |
| `readOnly` | boolean | false | Read-only state |
| `required` | boolean | false | Marks field required |

---

### 2.2 Textarea

Multiline text input. Inherits all Text Input states.

**Additional Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `rows` | number | 3 | Initial visible rows |
| `maxRows` | number | — | Auto-grow limit |
| `resize` | none \| vertical \| both | vertical | CSS resize behavior |
| `autoGrow` | boolean | false | Expand with content |

**States:** Same as Text Input. Min-height: 80px. Max-height when auto-grow: `--height-chat-input-max` (200px).

---

### 2.3 Search Input

Extends Text Input with built-in search icon prefix and optional clear button suffix.

| Variant | Description |
|---|---|
| Inline | Embedded in a panel or toolbar; no dedicated background |
| Overlay | Full-width search bar with elevated shadow for command-palette style |
| Compact | 32px height, for filtering within data tables |

**Behavior:** Clear button (×) appears when input has value. Debounce: 300ms default for live search.

---

### 2.4 Password Input

Extends Text Input with eye icon toggle for visibility.

| State | Suffix Icon | Field Type |
|---|---|---|
| Hidden | Eye | `type="password"` |
| Visible | Eye-off | `type="text"` |

Include strength meter component below field when `showStrength={true}`:

| Strength | Color | Label |
|---|---|---|
| Weak (< 2) | `--color-destructive` | Weak |
| Fair (2-3) | `--color-warning` | Fair |
| Strong (4) | `--color-success` | Strong |

---

### 2.5 Number Input

Extends Text Input. Includes stepper controls (increment / decrement buttons).

| Prop | Type | Default |
|---|---|---|
| `min` | number | — |
| `max` | number | — |
| `step` | number | 1 |
| `showStepper` | boolean | true |

---

### 2.6 Select / Dropdown

**Anatomy:** Trigger (label + chevron icon) > Dropdown panel > Options list

| State | Background | Border | Notes |
|---|---|---|---|
| Default | `--color-bg-primary` | `--color-border-secondary` | Closed |
| Hover | `--color-bg-primary` | `--color-border-primary` | Trigger hover |
| Open | `--color-bg-primary` | `--color-border-focus` | Panel visible below/above |
| Option hover | `--color-bg-active` | none | Within open panel |
| Option selected | `--color-primary-subtle` | none | Checkmark + accent text |
| Disabled | `--color-bg-disabled` | `--color-border-tertiary` | Cannot open |

**Sizes:** sm (32px trigger), md (40px trigger), lg (48px trigger). Panel max-height: 240px with internal scroll.

---

### 2.7 Combobox

Combines Search Input + Select. Typing filters options. Supports `creatable` prop to add new items.

| Variant | Description |
|---|---|
| Single | One selection; typing replaces value |
| Multi | Multiple tags shown in input; typing appends |
| Async | Options loaded via async search; shows spinner |

---

### 2.8 Checkbox

**Anatomy:** Check control (box + checkmark icon) + Label text + Optional helper

| State | Background | Border | Icon | Notes |
|---|---|---|---|---|
| Unchecked | `--color-bg-primary` | `--color-border-primary` | — | Default |
| Unchecked hover | `--color-bg-active` | `--color-border-focus` | — | |
| Checked | `--color-primary` | `--color-primary` | White check | |
| Checked hover | `--color-primary-hover` | `--color-primary-hover` | White check | |
| Indeterminate | `--color-primary` | `--color-primary` | White dash | Partial selection |
| Disabled unchecked | `--color-bg-disabled` | `--color-border-tertiary` | — | |
| Disabled checked | `--color-fg-disabled` | `--color-fg-disabled` | White check | |
| Error | `--color-bg-primary` | `--color-border-error` | — | Requires selection |

**Size:** 16×16px control. Label: 14px body text. Radius: `--radius-xs` (4px).

---

### 2.9 Radio Button

Similar anatomy to Checkbox but circular. Only one selected per group.

| State | Outer Ring | Inner Dot | Notes |
|---|---|---|---|
| Unselected | `--color-border-primary` | none | |
| Selected | `--color-primary` | `--color-primary` white dot | |
| Hover | `--color-border-focus` | none | |
| Disabled | `--color-border-tertiary` | `--color-fg-disabled` | |

---

### 2.10 Toggle / Switch

**Anatomy:** Track (pill shape) + Thumb (circle) + Optional label

| State | Track | Thumb | Notes |
|---|---|---|---|
| Off | `--color-border-primary` bg | White | Default unchecked |
| Off hover | `--color-fg-tertiary` | White | |
| On | `--color-primary` | White | Checked |
| On hover | `--color-primary-hover` | White | |
| Disabled off | `--color-bg-disabled` | `--color-fg-disabled` | |
| Disabled on | `--color-primary` at 40% opacity | White | |

**Sizes**

| Size | Track W×H | Thumb Diameter |
|---|---|---|
| sm | 28×16px | 12px |
| md | 36×20px | 16px |
| lg | 44×24px | 20px |

Transition: thumb slide 200ms ease-in-out.

---

### 2.11 Slider / Range

**Anatomy:** Track (full width) + Filled track (0 to value) + Thumb

| Element | Color |
|---|---|
| Track | `--color-border-secondary` |
| Filled track | `--color-primary` |
| Thumb default | `--color-primary` with white center |
| Thumb hover | `--color-primary-hover`, scale 1.1 |
| Thumb active | `--color-primary-active`, scale 0.95 |
| Disabled track | `--color-bg-disabled` |

**Props:** `min`, `max`, `step`, `value`, `range` (boolean for dual thumb).

---

### 2.12 Date Picker

**Anatomy:** Text Input trigger + Calendar popover

| Component | Description |
|---|---|
| Trigger | Text input with calendar icon suffix |
| Calendar header | Month/year selectors + prev/next arrows |
| Day grid | 7-column grid; today highlighted, selected filled |
| Date range | Start and end selection with range highlight |

**States:** Same as Text Input. Selected date: `--color-primary` background, white text. Today: underline or subtle dot.

---

### 2.13 File Upload

| Variant | Description |
|---|---|
| Button | Styled button that opens file picker |
| Drop zone | Dashed bordered area; accepts drag-and-drop |
| Inline | Compact attachment area within chat input |

**States**

| State | Background | Border |
|---|---|---|
| Default | `--color-bg-primary` | `--color-border-secondary` dashed |
| Hover / Drag-over | `--color-primary-subtle` | `--color-border-focus` dashed |
| Uploading | — | Progress indicator |
| Success | `--color-bg-primary` | `--color-border-success` |
| Error | `--color-bg-primary` | `--color-border-error` |

---

### 2.14 Label

```css
/* Label styles */
font-size:    12px;
font-weight:  500;
line-height:  16px;
color:        var(--color-fg-secondary);
margin-bottom: var(--spacing-xs);
```

Required indicator: `*` in `--color-destructive`. Optional indicator: "(optional)" in `--color-fg-quaternary`.

---

### 2.15 Form Group

**Anatomy:** Label + Input/Control + Helper text + Error message

```
gap between label and control: --spacing-xs (4px)
gap between control and helper/error: --spacing-xs (4px)
group vertical gap (multiple fields): --spacing-xl (16px)
```

---

### 2.16 Input Group

Combines multiple inputs or controls inline (e.g., country code + phone number, prefix text + input + suffix button).

**Anatomy:** Prepend addon + Input + Append addon

- Addons share border with input; radii only on outer edges
- Addon background: `--color-bg-active`
- Divider: `--color-border-secondary` 1px vertical

---

## Section 03 — Buttons & Actions

### 3.1 Button Tokens

```css
/* Shared */
--btn-border-radius:    var(--radius-sm);
--btn-font-weight:      var(--font-weight-medium);
--btn-transition:       background var(--duration-fast) var(--ease-out),
                        border-color var(--duration-fast) var(--ease-out),
                        box-shadow var(--duration-fast) var(--ease-out);
```

### 3.2 Button Sizes

| Size | Height | Padding H | Font | Icon Size | Gap |
|---|---|---|---|---|---|
| xs | 28px | 10px | 12px | 14px | 4px |
| sm | 32px | 12px | 12px | 16px | 6px |
| md | 40px | 16px | 14px | 16px | 8px |
| lg | 48px | 20px | 16px | 20px | 8px |
| xl | 56px | 24px | 18px | 20px | 10px |

---

### 3.3 Primary Button

| State | Background | Border | Text | Shadow |
|---|---|---|---|---|
| Default | `--color-primary` (#6459fe) | none | White | `--shadow-xs` |
| Hover | `--color-primary-hover` (#5149de) | none | White | `--shadow-sm` |
| Active | `--color-primary-active` (#3c2cb8) | none | White | `--shadow-xs` |
| Focus | `--color-primary` | 2px ring `--color-border-focus` 30% | White | |
| Loading | `--color-primary` at 80% | none | White | Spinner icon |
| Disabled | `--color-primary` at 40% | none | White at 60% | none |

---

### 3.4 Secondary Button

| State | Background | Border | Text |
|---|---|---|---|
| Default | `--color-bg-primary` | `--color-border-secondary` | `--color-fg-primary` |
| Hover | `--color-bg-active` | `--color-border-primary` | `--color-fg-primary` |
| Active | `--color-bg-tertiary` | `--color-border-primary` | `--color-fg-primary` |
| Disabled | `--color-bg-disabled` | `--color-border-tertiary` | `--color-fg-disabled` |

---

### 3.5 Ghost / Text Button

| State | Background | Border | Text |
|---|---|---|---|
| Default | transparent | none | `--color-fg-secondary` |
| Hover | `--color-bg-active` | none | `--color-fg-primary` |
| Active | `--color-bg-tertiary` | none | `--color-fg-primary` |
| Disabled | transparent | none | `--color-fg-disabled` |

---

### 3.6 Destructive Button

| State | Background | Border | Text |
|---|---|---|---|
| Default | `--color-destructive` | none | White |
| Hover | `#c0392b` | none | White |
| Active | `#a93226` | none | White |
| Disabled | `--color-destructive` at 40% | none | White |

**Secondary Destructive Variant**

| State | Background | Border | Text |
|---|---|---|---|
| Default | `--color-bg-primary` | `--color-border-error` | `--color-destructive` |
| Hover | `#fdecea` | `--color-border-error` | `--color-destructive` |

---

### 3.7 Icon-Only Button

No label. Must have `aria-label`.

| Variant | Shape | Background |
|---|---|---|
| Default | Square `--radius-sm` | Transparent → hover `--color-bg-active` |
| Circle | `--radius-full` | Transparent → hover `--color-bg-active` |
| Primary | Square | `--color-primary` |

**Sizes:** 28px / 32px / 40px / 48px — icon 14px / 16px / 20px / 24px respectively.

---

### 3.8 Icon + Label Button

Same as standard buttons but with icon prepended (leading) or appended (trailing).

| Prop | Values |
|---|---|
| `iconPosition` | leading \| trailing |
| `icon` | ReactNode (icon component) |

---

### 3.9 Button Group

Horizontally joined buttons sharing borders. Outer buttons have outer radii; inner buttons have no radius at joining edges.

| Variant | Description |
|---|---|
| Connected | Buttons share a continuous border |
| Segmented | Tabs-style toggle selection within group |

---

### 3.10 Split Button

Primary action + dropdown trigger separated by a vertical divider within the same pill shape.

```
[ Primary Action Label ] | [▾]
```

The dropdown trigger opens a menu of secondary actions.

---

### 3.11 FAB (Floating Action Button)

Fixed positioned, bottom-right. Used for primary page action.

```css
position: fixed;
bottom: var(--spacing-4xl); /* 32px */
right:  var(--spacing-4xl);
z-index: var(--z-raised);
border-radius: var(--radius-full);
box-shadow: var(--shadow-lg);
```

| Variant | Size | Icon |
|---|---|---|
| Mini | 40px | 20px |
| Default | 56px | 24px |
| Extended | auto (label + icon) | 20px |

---

### 3.12 Link / Text Action

Inline text that triggers navigation or action.

| State | Color | Decoration |
|---|---|---|
| Default | `--color-primary` | none |
| Hover | `--color-primary-hover` | underline |
| Visited | `#6459fe` at 70% | none |
| Disabled | `--color-fg-disabled` | none |

---

## Section 04 — Navigation

### 4.1 Top Nav Bar

**Height:** 56px (`--height-nav`)
**Background:** `--color-bg-primary`
**Border bottom:** 1px `--color-border-secondary`
**Shadow:** `--shadow-xs`

**Anatomy (left → right):**
1. Logo / wordmark (left)
2. Primary navigation links (center, optional)
3. Search bar (center-right, optional)
4. Action icons: notifications, help, user avatar (right)

**Responsive:**
- ≥ 1024px: full nav visible
- < 1024px: hamburger menu, links collapse to drawer

---

### 4.2 Sidebar / Rail Nav

Enterprise Brain uses a **collapsed icon-only rail** by default with optional expand-on-hover or toggle.

**Collapsed (default)**

```css
width: 64px; /* --sidebar-width-collapsed */
padding: var(--spacing-md) var(--spacing-xs);
background: var(--color-bg-primary);
border-right: 1px solid var(--color-border-secondary);
```

**Expanded**

```css
width: 260px; /* --sidebar-width-expanded */
padding: var(--spacing-md) var(--spacing-md);
```

**Nav Item States**

| State | Background | Icon Color | Label |
|---|---|---|---|
| Default | transparent | `--color-fg-quaternary` | Hidden (collapsed) |
| Hover | `--color-bg-active` | `--color-fg-secondary` | Tooltip shown |
| Active | `--color-primary-subtle` | `--color-primary` | Bold |
| Focus | `--color-bg-active` | `--color-fg-primary` | Visible outline |

**Nav Item Anatomy (expanded):** Icon (20px) + Label text (14px medium)
**Nav Item Height:** 40px
**Nav Item Radius:** `--radius-md` (8px)
**Gap between items:** `--spacing-xs` (4px)

**Sections:** Nav items can be grouped with a section divider (1px border + optional label).

**Bottom section:** Settings, help, user profile avatar at bottom of sidebar.

---

### 4.3 Breadcrumb

| Element | Style |
|---|---|
| Crumb link | 14px, `--color-fg-secondary`, no underline |
| Crumb link hover | `--color-fg-primary`, underline |
| Current page | 14px, `--color-fg-primary`, not linked |
| Separator | `/` or `›` in `--color-fg-quaternary` |

Max visible crumbs: 4; collapse middle items to `...` with dropdown on click.

---

### 4.4 Tabs

| Variant | Description |
|---|---|
| Underline | Active tab has 2px bottom border in `--color-primary` |
| Pill | Active tab has filled background `--color-primary-subtle`, text `--color-primary` |
| Folder | Box-style tabs sitting on content panel |

**Tab Item States**

| State | Text Color | Indicator |
|---|---|---|
| Default | `--color-fg-secondary` | none |
| Hover | `--color-fg-primary` | Light underline |
| Active | `--color-primary` | 2px solid border / filled |
| Disabled | `--color-fg-disabled` | none |

Tab height: 40px. Font: 14px medium. Gap between tabs: `--spacing-xs`.

---

### 4.5 Pagination

| Element | Style |
|---|---|
| Page button default | 32px square, `--radius-sm`, ghost |
| Page button hover | `--color-bg-active` |
| Active page | `--color-primary` background, white text |
| Prev/Next | Ghost icon buttons |
| Ellipsis | `...` text, non-interactive |

---

### 4.6 Stepper

Horizontal or vertical step indicator for multi-step flows.

| State | Circle | Label | Line |
|---|---|---|---|
| Upcoming | `--color-border-secondary` outline | `--color-fg-quaternary` | `--color-border-secondary` |
| Active | `--color-primary` filled | `--color-fg-primary` bold | `--color-border-secondary` |
| Completed | `--color-success` filled, checkmark | `--color-fg-secondary` | `--color-success` |
| Error | `--color-destructive` | `--color-destructive` | — |

Step circle: 32px, `--radius-full`. Label: 12px. Connector line: 1px `--color-border-secondary`.

---

### 4.7 Bottom Nav Bar (Mobile)

Height: 56px. Fixed bottom. Background: `--color-bg-primary`. Border top: `--color-border-secondary`.

| State | Icon | Label |
|---|---|---|
| Default | `--color-fg-quaternary` | 10px `--color-fg-quaternary` |
| Active | `--color-primary` | 10px `--color-primary` |

Items: 4-5 max. Icon: 24px. Always show label.

---

### 4.8 Back Button

Ghost button with left arrow icon.

```
← Back          or          ← [Previous page name]
```

Style: Ghost sm button. Icon: `chevron-left` or `arrow-left` 16px. Text: 14px `--color-fg-secondary`.

---

## Section 05 — Overlays & Feedback

### 5.1 Modal / Dialog

**Anatomy:** Backdrop > Modal container > Header (title + close button) > Body > Footer (actions)

**Backdrop:** `rgba(10,13,18,0.5)` full-screen fixed, `z-index: --z-overlay`

**Modal container:**
```css
background:    var(--color-bg-primary);
border-radius: var(--radius-lg);  /* 12px */
box-shadow:    var(--shadow-xl);
z-index:       var(--z-modal);
max-height:    85vh;
overflow-y:    auto;
```

**Sizes**

| Size | Width | Usage |
|---|---|---|
| sm | 400px | Confirmation dialogs |
| md | 560px | Forms, settings |
| lg | 720px | Complex forms |
| xl | 900px | Full-featured modals |
| fullscreen | 100vw×100vh | Immersive views |

**Animation:** Enter — scale from 0.95 + fade in, 200ms ease-out. Exit — fade out, 150ms ease-in.

---

### 5.2 Drawer / Sheet

Slides in from an edge. Uses same backdrop as Modal.

| Variant | Position | Width / Height |
|---|---|---|
| Right | Right edge | 400px (default), 560px (lg) |
| Left | Left edge | 260–400px |
| Bottom sheet | Bottom edge | Full width, 50–90vh |
| Top sheet | Top edge | Full width, auto height |

Animation: Slide in from edge + fade, 300ms ease-in-out. `--z-modal`.

---

### 5.3 Tooltip

Appears on hover/focus after 500ms delay. Disappears on mouse-leave immediately.

```css
background:    var(--color-fg-primary); /* #0a1217 */
color:         var(--color-fg-on-color);
font-size:     12px;
padding:       var(--spacing-xs) var(--spacing-md); /* 4px 8px */
border-radius: var(--radius-sm);
box-shadow:    var(--shadow-sm);
max-width:     240px;
z-index:       var(--z-tooltip);
```

**Placements:** top, bottom, left, right (with -start and -end variants). Arrow: 6px triangle matching background.

---

### 5.4 Popover

Richer than tooltip. Triggered by click. Can contain forms, action lists, or rich content.

```css
background:    var(--color-bg-primary);
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-lg);
box-shadow:    var(--shadow-lg);
min-width:     200px;
max-width:     400px;
z-index:       var(--z-dropdown);
```

Dismiss: Click outside, Escape key, or close button.

---

### 5.5 Context Menu

Triggered by right-click. Same styling as Dropdown Menu.

```css
background:    var(--color-bg-primary);
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-md);
box-shadow:    var(--shadow-md);
min-width:     180px;
padding:       var(--spacing-xs) 0;
z-index:       var(--z-dropdown);
```

**Menu Item States**

| State | Background | Text |
|---|---|---|
| Default | transparent | `--color-fg-primary` |
| Hover | `--color-bg-active` | `--color-fg-primary` |
| Active | `--color-primary-subtle` | `--color-primary` |
| Destructive | transparent | `--color-destructive` |
| Destructive hover | `#fdecea` | `--color-destructive` |
| Disabled | transparent | `--color-fg-disabled` |

Menu item height: 36px. Padding H: 12px. Icon: 16px leading.

---

### 5.6 Dropdown Menu

Same visual as Context Menu. Triggered by button click. Positioned relative to trigger.

**Variants:** Select list, Actions list (with icons), Nested (submenu with `›`), Searchable.

---

### 5.7 Toast / Snackbar

Fixed positioned, stacks vertically. Max 3 visible at a time; older ones fade out.

```css
position:      fixed;
bottom:        var(--spacing-4xl); /* 32px */
right:         var(--spacing-4xl);
z-index:       var(--z-toast);
min-width:     320px;
max-width:     480px;
border-radius: var(--radius-md);
box-shadow:    var(--shadow-lg);
padding:       var(--spacing-md) var(--spacing-xl);
```

**Severity Variants**

| Variant | Background | Icon | Border-left |
|---|---|---|---|
| Info | `--color-bg-primary` | `--color-info` info-circle | `--color-info` |
| Success | `--color-bg-primary` | `--color-success` check-circle | `--color-success` |
| Warning | `--color-bg-primary` | `--color-warning` alert-triangle | `--color-warning` |
| Destructive | `--color-bg-primary` | `--color-destructive` x-circle | `--color-destructive` |
| Neutral | `#0a1217` | White | — |

**Auto-dismiss:** 4000ms default. Pause on hover. Dismiss button always present.

---

### 5.8 Alert / Inline Banner

Inline in page, not floating. Contextual feedback related to content.

```css
border-radius: var(--radius-md);
padding:       var(--spacing-md) var(--spacing-xl);
border:        1px solid;
```

| Variant | Background | Border | Icon Color | Text |
|---|---|---|---|---|
| Info | `#e8f0fe` | `--color-info` at 30% | `--color-info` | `--color-fg-primary` |
| Success | `#e8f5e9` | `--color-success` at 30% | `--color-success` | `--color-fg-primary` |
| Warning | `#fff8e1` | `--color-warning` at 30% | `--color-warning` | `--color-fg-primary` |
| Error | `#fdecea` | `--color-destructive` at 30% | `--color-destructive` | `--color-fg-primary` |

**Dismissible:** Optional close button (×) top-right.

---

### 5.9 Empty State

Centered in container. Icon + heading + body + CTA button.

```css
display:         flex;
flex-direction:  column;
align-items:     center;
gap:             var(--spacing-xl);  /* 16px */
padding:         var(--spacing-6xl); /* 48px */
text-align:      center;
```

| Element | Style |
|---|---|
| Illustration / Icon | 48px or 64px, `--color-fg-quaternary` |
| Heading | 18px semibold, `--color-fg-primary` |
| Body | 14px, `--color-fg-secondary`, max-width 320px |
| CTA | Primary or Secondary button |

---

### 5.10 Loading Skeleton

Replaces content while loading. Animated shimmer.

```css
background: linear-gradient(
  90deg,
  var(--color-border-secondary) 0%,
  var(--color-bg-active) 50%,
  var(--color-border-secondary) 100%
);
background-size: 200% 100%;
animation: shimmer 1.5s ease-in-out infinite;
border-radius: var(--radius-sm);
```

**Common patterns:** Text skeleton (varied widths 60–100%), Avatar skeleton (circle), Card skeleton (rect), List skeleton (rows of text lines).

---

### 5.11 Spinner / Loader

```css
/* Spinner */
width:  20px;
height: 20px;
border: 2px solid var(--color-border-secondary);
border-top-color: var(--color-primary);
border-radius: var(--radius-full);
animation: spin 600ms linear infinite;
```

| Size | Diameter | Border |
|---|---|---|
| xs | 12px | 1.5px |
| sm | 16px | 2px |
| md | 20px | 2px |
| lg | 32px | 3px |
| xl | 48px | 4px |

---

### 5.12 Progress Bar

```css
height:        6px;
border-radius: var(--radius-full);
background:    var(--color-border-secondary);

/* Fill */
background:    var(--color-primary);
border-radius: var(--radius-full);
transition:    width var(--duration-slow) var(--ease-out);
```

| Variant | Fill Color |
|---|---|
| Default | `--color-primary` |
| Success | `--color-success` |
| Warning | `--color-warning` |
| Destructive | `--color-destructive` |
| Indeterminate | Animated sliding gradient |

---

### 5.13 Confirmation Dialog

Extends Modal/Dialog (sm size) with:
- Destructive icon (48px) centered in header
- Clear action title ("Delete conversation?")
- Body explaining consequence
- Footer: Cancel (secondary) + Confirm (destructive primary)
- Keyboard: Enter = confirm, Escape = cancel

---

## Section 06 — Data Display

### 6.1 Table

**Anatomy:** Table > Header row > Body rows > Footer row (optional)

```css
/* Table container */
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-md);
overflow:      hidden;

/* Header cell */
background:    var(--color-bg-active);
font-size:     12px;
font-weight:   500;
color:         var(--color-fg-tertiary);
padding:       var(--spacing-md) var(--spacing-xl);
border-bottom: 1px solid var(--color-border-secondary);

/* Body cell */
font-size:     14px;
color:         var(--color-fg-primary);
padding:       var(--spacing-md) var(--spacing-xl);
border-bottom: 1px solid var(--color-border-secondary);
```

**Row States**

| State | Background |
|---|---|
| Default | `--color-bg-primary` |
| Hover | `--color-bg-active` |
| Selected | `--color-primary-subtle` |
| Expanded | `--color-bg-active` |
| Disabled | `--color-bg-disabled` |

**Variants:** Basic, Striped (alternating row bg), Compact (reduced cell padding), Bordered (all cells), Sortable (click headers).

---

### 6.2 Data Grid

Extends Table with: column resizing, column reordering, row selection (checkboxes), inline cell editing, virtual scroll for large datasets, sticky first column.

---

### 6.3 Card

**Base card:**
```css
background:    var(--color-bg-primary);
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-lg); /* 12px */
box-shadow:    var(--shadow-xs);
padding:       var(--spacing-2xl); /* 20px */
```

**Variants**

| Variant | Description |
|---|---|
| Default | Standard with border + shadow |
| Flat | No shadow, subtle border |
| Elevated | Stronger shadow `--shadow-md` |
| Interactive | Hover: `--shadow-md`, translateY(-1px), cursor pointer |
| Feature | Gradient border or accent top stripe |

---

### 6.4 List

Vertical stack of items. Can be ordered, unordered, or action items.

**List Item States:** Same as table rows (default, hover, selected, disabled).

List item anatomy: Leading (icon/avatar/checkbox) + Content (label + meta) + Trailing (badge/action).

List item height: 48px (default), 40px (compact), 64px (with description).

---

### 6.5 Avatar

Circular image with fallback to initials or icon.

| Size | Diameter | Font |
|---|---|---|
| xs | 20px | 10px |
| sm | 24px | 10px |
| md | 32px | 13px |
| lg | 40px | 16px |
| xl | 48px | 18px |
| 2xl | 64px | 22px |

**Variants:** Image, Initials, Icon fallback, with status dot overlay (online: `--color-success`, away: `--color-warning`, offline: `--color-fg-quaternary`).

**Group:** Stacked avatars with `-8px` margin, max 5 shown then `+N` overflow.

---

### 6.6 Badge / Chip

Small count or status indicator.

```css
display:        inline-flex;
align-items:    center;
border-radius:  var(--radius-full);
font-size:      11px;
font-weight:    500;
padding:        2px 6px;
```

| Variant | Background | Text |
|---|---|---|
| Default | `--color-border-secondary` | `--color-fg-secondary` |
| Primary | `--color-primary-subtle` | `--color-primary` |
| Success | `#e8f5e9` | `--color-success` |
| Warning | `#fff8e1` | `--color-warning` |
| Destructive | `#fdecea` | `--color-destructive` |
| Info | `#e8f0fe` | `--color-info` |

**Count badge:** Overlaid on icon/avatar. Min width 18px. `--radius-full`. Red background by default.

---

### 6.7 Tag / Label

Closeable chips for categorization. Similar to Badge but dismissible.

```css
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-sm); /* 6px, more rectangular than badge */
padding:       var(--spacing-xxs) var(--spacing-md); /* 2px 8px */
font-size:     12px;
```

Close button (×) trailing, 12px, appears on hover. Clicking removes tag from list.

---

### 6.8 Stat / Metric Card

```
┌──────────────────────┐
│ Label     ↑ +12%     │
│ 14,302               │
│ ────────────         │
│ vs last month        │
└──────────────────────┘
```

| Element | Style |
|---|---|
| Label | 12px medium, `--color-fg-tertiary` |
| Value | 30px bold, `--color-fg-primary` |
| Delta positive | 12px, `--color-success` + ↑ icon |
| Delta negative | 12px, `--color-destructive` + ↓ icon |
| Subtitle | 12px, `--color-fg-quaternary` |

---

### 6.9 Timeline

Vertical list of events with connecting line.

| Element | Style |
|---|---|
| Connector line | 2px solid `--color-border-secondary`, left-aligned |
| Event dot | 12px circle, `--color-primary` or status color |
| Timestamp | 12px, `--color-fg-quaternary` |
| Title | 14px semibold, `--color-fg-primary` |
| Body | 14px, `--color-fg-secondary` |

---

### 6.10 Accordion / Expander

Collapsible content sections.

**Trigger:** Full-width row with label + chevron icon (rotates 180° when open).

```css
/* Trigger */
padding:       var(--spacing-md) var(--spacing-xl);
border-bottom: 1px solid var(--color-border-secondary);
cursor:        pointer;

/* Trigger hover */
background: var(--color-bg-active);

/* Content */
padding:   var(--spacing-xl);
animation: expand var(--duration-base) var(--ease-out);
```

**Variants:** Single (only one open at a time), Multi (multiple can be open), Flush (no card border, full-width divider only).

---

### 6.11 Tree View

Hierarchical list with expand/collapse nodes.

| Element | Style |
|---|---|
| Node indent | 16px per level |
| Expand icon | `chevron-right` 14px, rotates 90° when open |
| Node hover | `--color-bg-active` background |
| Selected node | `--color-primary-subtle` background, `--color-primary` text |

---

### 6.12 Divider

```css
/* Horizontal */
border-top: 1px solid var(--color-border-secondary);
margin: var(--spacing-xl) 0;

/* Vertical */
border-left: 1px solid var(--color-border-secondary);
height: 100%;
margin: 0 var(--spacing-xl);
```

**With label:** Center label text in `--color-fg-quaternary` 12px. Background matching container to create text cutout effect.

---

### 6.13 Key-Value Row

Used in detail panels, metadata displays.

```
Label       Value
─────────────────
Model       GPT-4o
Created     Jan 15, 2026
Tokens      1,234
```

| Element | Style |
|---|---|
| Key | 12px medium, `--color-fg-tertiary`, fixed width or 40% |
| Value | 14px, `--color-fg-primary` |
| Row divider | 1px `--color-border-secondary` |
| Row height | 36px |

---

### 6.14 Code Block

```css
/* Container */
background:    var(--color-bg-active);
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-md);
overflow:      hidden;

/* Header bar */
background:    #f3f4f6;
padding:       var(--spacing-md) var(--spacing-xl);
border-bottom: 1px solid var(--color-border-secondary);
font-size:     12px;
color:         var(--color-fg-tertiary);

/* Code area */
font-family: var(--font-family-mono);
font-size:   13px;
line-height: 20px;
padding:     var(--spacing-xl);
overflow-x:  auto;
```

Header bar contains: language label (left) + copy button (right).

Syntax highlighting: Use a neutral theme compatible with light backgrounds (e.g., GitHub Light).

---

## Section 07 — AI / Chat Specific

> These components are the core of the Enterprise Brain product. They receive the highest level of design attention.

### 7.1 Chat Message Bubble

**User Message**

```css
/* Outer alignment */
display:         flex;
justify-content: flex-end;
padding:         var(--spacing-md) var(--spacing-4xl);

/* Bubble */
background:    var(--color-primary);
color:         var(--color-fg-on-color);
border-radius: var(--radius-2xl) var(--radius-2xl) var(--radius-xs) var(--radius-2xl);
padding:       var(--spacing-lg) var(--spacing-xl); /* 12px 16px */
max-width:     var(--width-chat-max); /* 868px */
font-size:     var(--text-base); /* 14px */
line-height:   var(--leading-base); /* 19.6px */
```

**Assistant Message**

```css
/* Outer alignment */
display:         flex;
justify-content: flex-start;
padding:         var(--spacing-md) var(--spacing-4xl);

/* Content area — no bubble background */
background:    transparent;
max-width:     var(--width-chat-max);
font-size:     var(--text-base);
line-height:   var(--leading-md); /* 24px for readability */
color:         var(--color-fg-primary);
```

Assistant message renders full Markdown (headings, lists, bold, code blocks, tables). No bubble background — message appears directly on page background.

**Message anatomy (assistant):** Avatar (optional, 24px circle) + Message content column + Feedback row below

**Message anatomy (user):** Message content + Edit button (pencil icon, on hover) + User avatar (optional)

---

### 7.2 Streaming Text

Assistant message text that arrives token-by-token.

```css
/* Cursor */
.streaming-cursor {
  display:          inline-block;
  width:            2px;
  height:           1em;
  background:       var(--color-primary);
  border-radius:    1px;
  margin-left:      1px;
  vertical-align:   text-bottom;
  animation:        blink var(--duration-slower) ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```

- Text renders markdown incrementally — headings and code blocks appear when their closing delimiter is received
- Show Stop button while streaming is active
- On stop: cursor disappears, regenerate button appears

---

### 7.3 Chat Input Bar

Primary user interaction element. Always visible at bottom of chat view.

```css
/* Container */
background:    var(--color-bg-primary);
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-32); /* 32px pill */
box-shadow:    var(--shadow-xs);
padding:       var(--spacing-md) var(--spacing-md);
display:       flex;
align-items:   flex-end;
gap:           var(--spacing-md);
max-width:     var(--width-chat-max); /* 868px */
min-height:    56px;  /* height/56 */
max-height:    200px; /* height/200 */
```

**Anatomy (left → right):**
1. Attachment button (paperclip icon, 20px)
2. Textarea (auto-grow, 14px, no border, transparent bg)
3. Voice input button (mic icon, 20px)
4. Send button (arrow-up icon, primary, 32px circle, disabled when empty)

**States**

| State | Border | Shadow |
|---|---|---|
| Default | `--color-border-secondary` | `--shadow-xs` |
| Focus | `--color-border-focus` | `--shadow-sm` |
| Disabled | `--color-border-tertiary` | none |
| Uploading | `--color-border-secondary` | Loading indicator in attachment area |

**Send button:** 32×32px circle, `--color-primary` background. Disabled: `--color-fg-disabled` background. Transition: 100ms.

**Textarea:** No visible border. Font 14px. Placeholder: `--color-fg-quaternary`. Auto-grow from 1 row to max 6 rows before scroll.

---

### 7.4 Suggested Prompts / Chips

Displayed on empty/greeting state of chat. Clickable chips that pre-fill the input.

```css
/* Chip */
display:        inline-flex;
align-items:    center;
gap:            var(--spacing-xs);
background:     var(--color-bg-primary);
border:         1px solid var(--color-border-secondary);
border-radius:  var(--radius-32);  /* pill */
padding:        var(--spacing-md) var(--spacing-xl); /* 8px 16px */
font-size:      14px;
color:          var(--color-fg-secondary);
cursor:         pointer;
box-shadow:     var(--shadow-xs);
transition:     all var(--duration-fast) var(--ease-out);
```

**Hover state:** `border-color: --color-border-focus`, `color: --color-fg-primary`, slight shadow lift.

**Layout:** 2-column grid (on desktop) or horizontal scroll row. Max 6 chips. Each chip may have a leading icon (16px, `--color-fg-quaternary`).

**Chip categories:** Research, Write, Code, Analyze, Summarize, Plan.

---

### 7.5 Conversation List Item

Item in the sidebar conversation history list.

```css
/* Container */
padding:       var(--spacing-md) var(--spacing-lg); /* 8px 12px */
border-radius: var(--radius-md); /* 8px */
cursor:        pointer;
display:       flex;
align-items:   center;
gap:           var(--spacing-md);
min-height:    40px;
```

**States**

| State | Background | Text |
|---|---|---|
| Default | transparent | `--color-fg-secondary` |
| Hover | `--color-bg-active` | `--color-fg-primary` |
| Active / selected | `--color-primary-subtle` | `--color-primary` |
| Focused | `--color-bg-active` | `--color-fg-primary` + ring |

**Anatomy:** Chat icon (optional, 16px) + Title text (14px, truncated 1 line) + Timestamp / Action menu (on hover, `...` icon button)

**Title:** 14px, `font-weight: 400` default, `500` when active. Max 1 line with `text-overflow: ellipsis`.

---

### 7.6 Conversation Sidebar

The full sidebar panel for conversation history.

```css
width:         var(--sidebar-width-expanded); /* 260px */
background:    var(--color-bg-primary);
border-right:  1px solid var(--color-border-secondary);
display:       flex;
flex-direction: column;
height:        100vh;
overflow:      hidden;
```

**Sections (top to bottom):**
1. New Chat button (full width, primary ghost, `--spacing-md` padding top)
2. Search conversations (compact search input)
3. Conversation groups: Today, Yesterday, Previous 7 days, Previous 30 days, Older (section labels 11px, `--color-fg-quaternary`, uppercase)
4. Conversation list items (scrollable)
5. Bottom: User profile + Settings link

**Collapsed state:** 64px rail, only icon buttons visible; no conversation titles.

---

### 7.7 Tool Call Indicator

Shown within assistant message when the AI invokes a tool/function.

```css
/* Container */
background:    var(--color-bg-active);
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-md);
padding:       var(--spacing-md) var(--spacing-lg);
display:       flex;
align-items:   center;
gap:           var(--spacing-md);
font-size:     13px;
color:         var(--color-fg-secondary);
```

**States**

| State | Icon | Color | Label example |
|---|---|---|---|
| Running | Spinner (sm) | `--color-primary` | "Searching the web…" |
| Completed | check-circle | `--color-success` | "Searched the web" |
| Failed | x-circle | `--color-destructive` | "Search failed" |
| Expandable | chevron | — | Click to see inputs/outputs |

**Expanded view:** Shows tool name, input params as JSON, output summary or error. Code block style.

---

### 7.8 Source / Citation Card

Appears below assistant message to reference external sources.

```css
/* Card */
background:    var(--color-bg-primary);
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-md);
padding:       var(--spacing-md) var(--spacing-lg);
display:       flex;
align-items:   flex-start;
gap:           var(--spacing-md);
max-width:     320px;
cursor:        pointer;
box-shadow:    var(--shadow-xs);
```

**Anatomy:** Favicon (16px) + Domain (12px, `--color-fg-quaternary`) + Title (13px bold, truncated 2 lines) + External link icon (12px)

Hover: border-color `--color-border-focus`, shadow `--shadow-sm`.

**Inline citation:** Superscript `[1]` in primary color within message text, clicking scrolls to or highlights the source card.

---

### 7.9 Thinking / Reasoning Block

Collapsible block showing chain-of-thought reasoning.

```css
/* Container */
background:    linear-gradient(135deg, #f0f0ff 0%, #f5f3ff 100%);
border:        1px solid #e0ddff;
border-radius: var(--radius-md);
padding:       var(--spacing-md) var(--spacing-xl);
margin-bottom: var(--spacing-md);
```

**Header:** Brain/sparkle icon (16px, `--color-primary`) + "Thinking…" / "Thought for X seconds" + Chevron toggle

**Content (expanded):** Monospace-ish text, 13px, `--color-fg-secondary`, italic. Rendered in full Markdown.

**Animation while thinking:** Pulsing brain icon. `opacity: 0.6` to `1` cycle, 1.2s ease-in-out.

---

### 7.10 Attachment Preview

Shows file previews inside the chat input or within a message.

**In input bar:**
```css
/* Attachment chip */
background:    var(--color-bg-active);
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-sm);
padding:       var(--spacing-xs) var(--spacing-md);
display:       inline-flex;
align-items:   center;
gap:           var(--spacing-xs);
font-size:     12px;
```

Anatomy: File type icon (16px) + Filename (truncated, 12px) + Remove button (×, 12px)

**In message:**
| Type | Preview Style |
|---|---|
| Image | Thumbnail, max 320px wide, `--radius-md`, click to expand |
| PDF | Document icon + filename + page count + download |
| Code file | Code block with language header |
| Other | Generic file icon + filename + size |

---

### 7.11 Feedback Row

Appears below each completed assistant message.

```css
display:        flex;
align-items:    center;
gap:            var(--spacing-xs);
padding-top:    var(--spacing-xs);
opacity:        0;
transition:     opacity var(--duration-fast) var(--ease-out);

/* Show on message hover */
.message:hover .feedback-row {
  opacity: 1;
}
```

**Buttons (left to right):** Copy, Thumbs up, Thumbs down, Share, Regenerate

Each: Ghost icon-only button (28px, 16px icon, `--color-fg-quaternary`, hover `--color-fg-primary`).

**Thumbs up active:** `--color-success` icon, filled. **Thumbs down active:** `--color-destructive` icon, filled.

---

### 7.12 Model Selector

Dropdown button in top bar or chat input to switch AI models.

```css
/* Trigger */
display:        inline-flex;
align-items:    center;
gap:            var(--spacing-xs);
padding:        var(--spacing-xs) var(--spacing-md);
border-radius:  var(--radius-full);
border:         1px solid var(--color-border-secondary);
background:     var(--color-bg-primary);
font-size:      13px;
font-weight:    500;
color:          var(--color-fg-secondary);
cursor:         pointer;
```

**Dropdown options:** Model name + short description + optional badge (e.g., "New", "Preview", "Fast"). Grouped by provider if multi-provider.

Hover state: `--color-bg-active` background. Selected: checkmark + `--color-primary` text.

---

### 7.13 Token / Usage Meter

Shows remaining tokens or context usage. Usually in sidebar or top bar.

```css
/* Mini version */
font-size:  11px;
color:      var(--color-fg-quaternary);
```

**Bar version:**
- Track: 100% width, 4px height, `--color-border-secondary`
- Fill: percentage, `--color-primary`
- Near limit (>80%): fill turns `--color-warning`
- At limit (>95%): fill turns `--color-destructive`

Label: "3,241 / 128,000 tokens". Optional tooltip with breakdown.

---

### 7.14 Stop / Cancel Button

Replaces Send button while AI is generating a response.

```css
/* Stop button */
width:         32px;
height:        32px;
border-radius: var(--radius-full);
background:    var(--color-fg-primary); /* dark filled */
display:       flex;
align-items:   center;
justify-content: center;
cursor:        pointer;
```

Icon: Square/stop icon, white, 14px. Hover: `--color-fg-secondary` background. Transition: 100ms.

---

### 7.15 Regenerate Button

Appears after feedback or when user explicitly requests new response.

Style: Ghost sm button with `rotate-ccw` or `refresh` icon + "Regenerate" label.
Color: `--color-fg-secondary`. Hover: `--color-fg-primary`.
Position: Below last assistant message, in feedback row.

---

### 7.16 Copy Response Button

Within feedback row. Copies full message markdown to clipboard.

**States:**

| State | Icon | Color | Label (if labeled) |
|---|---|---|---|
| Default | copy | `--color-fg-quaternary` | — |
| Hover | copy | `--color-fg-primary` | — |
| Copied | check | `--color-success` | "Copied!" |

Copied state reverts to default after 2000ms.

---

### 7.17 Voice Input Button

Microphone icon button in chat input bar.

| State | Icon | Background | Notes |
|---|---|---|---|
| Default | mic | transparent | `--color-fg-quaternary` |
| Hover | mic | `--color-bg-active` | `--color-fg-primary` |
| Recording | mic-off / waveform | `--color-destructive` subtle | Pulse animation |
| Processing | spinner | transparent | Converting speech |

Recording indicator: Red pulsing dot overlay on icon.

---

### 7.18 Agent Step Card

Used when AI runs multi-step agentic tasks.

```css
/* Card */
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-md);
overflow:      hidden;
margin-bottom: var(--spacing-md);
```

**Header (always visible):**
- Step number badge + Step title + Status badge + Duration
- Expand/collapse chevron

**Body (expanded):** Scrollable content, inputs/outputs, tool calls, sub-steps.

**Step statuses:**

| Status | Badge Color | Icon |
|---|---|---|
| Pending | `--color-fg-quaternary` | clock |
| Running | `--color-primary` | spinner |
| Completed | `--color-success` | check |
| Failed | `--color-destructive` | x |
| Skipped | `--color-fg-quaternary` | minus |

---

### 7.19 Memory / Context Panel

Right sidebar or expandable panel showing what the AI "remembers" or has in context.

**Anatomy:**
- Panel header: "Memory & Context" + close button
- Memory items list: each item is a key fact or instruction the AI retains
- Context window visualization: token meter
- Actions: Clear memory, Add memory, Edit item

**Memory item:**
```css
padding:       var(--spacing-md) var(--spacing-lg);
border-bottom: 1px solid var(--color-border-secondary);
display:       flex;
align-items:   flex-start;
gap:           var(--spacing-md);
font-size:     13px;
```

Anatomy: Memory icon (16px, `--color-fg-quaternary`) + Text content + Delete button (×, on hover)

---

### 7.20 Greeting / Welcome State

Shown when conversation is new and empty.

**Layout:**
```
     [AI Logo / Animated Icon]

     How can I help you today?
     [Subtitle: Enterprise Brain · Powered by GPT-4o]

  [Chip 1]  [Chip 2]  [Chip 3]

  [Chip 4]  [Chip 5]  [Chip 6]

         [Chat Input Bar]
```

**Styles:**
- Logo: 48px, centered, subtle gradient or lottie animation
- Heading: 30px bold, `--color-fg-primary`, centered
- Subtitle: 14px, `--color-fg-quaternary`, centered
- Suggested chips: 2-column grid, centered, max-width 600px
- Chat input: max-width 868px, centered with `margin: 0 auto`

---

## Section 08 — Layout & Containers

### 8.1 Page Layout

**Main app shell:**
```
┌──────────────────────────────────────────┐
│                Top Nav Bar               │ ← 56px (optional)
├───────┬──────────────────────────────────┤
│       │                                  │
│  Nav  │        Main Content Area         │
│  Rail │                                  │
│  64px │          max-width: 868px        │
│       │          centered                │
│       │                                  │
└───────┴──────────────────────────────────┘
```

```css
/* App shell */
display:        grid;
grid-template-columns: var(--sidebar-width-collapsed) 1fr;
grid-template-rows:    56px 1fr;
height:         100vh;
overflow:       hidden;

/* Main content */
overflow-y:     auto;
padding:        var(--spacing-4xl);
```

**Responsive breakpoints:**

| Breakpoint | Width | Layout change |
|---|---|---|
| mobile | < 640px | No sidebar (drawer), full-width content |
| tablet | 640–1024px | Collapsed sidebar always |
| desktop | 1024–1440px | Collapsed sidebar default, expandable |
| wide | > 1440px | Can expand sidebar without content loss |

---

### 8.2 Grid System

12-column grid. Gutter: 24px. Margins: 24px (mobile), 32px (tablet), 40px (desktop).

```css
.grid {
  display:               grid;
  grid-template-columns: repeat(12, 1fr);
  gap:                   var(--spacing-3xl); /* 24px */
}
```

**Column spans:**

| Span | Class | Width |
|---|---|---|
| 4 col | col-4 | 33.3% |
| 6 col | col-6 | 50% |
| 8 col | col-8 | 66.7% |
| 12 col | col-12 | 100% |

---

### 8.3 Panel / Section

Content container within page.

```css
.panel {
  background:    var(--color-bg-primary);
  border:        1px solid var(--color-border-secondary);
  border-radius: var(--radius-lg);
  padding:       var(--spacing-2xl);
  box-shadow:    var(--shadow-xs);
}

.panel-header {
  font-size:     16px;
  font-weight:   600;
  color:         var(--color-fg-primary);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-border-secondary);
  margin-bottom: var(--spacing-xl);
}
```

---

### 8.4 Split Pane

Two resizable panels side by side.

```css
.split-pane {
  display:  flex;
  height:   100%;
  overflow: hidden;
}

.split-pane-divider {
  width:      4px;
  background: var(--color-border-secondary);
  cursor:     col-resize;
  flex-shrink: 0;
  transition: background var(--duration-fast) var(--ease-out);
}

.split-pane-divider:hover {
  background: var(--color-primary);
}
```

Min panel width: 200px. Max: 80% of container. Persist split ratio in localStorage.

---

### 8.5 Scroll Area

Custom scrollbar styled to match design system.

```css
/* Webkit scrollbar */
::-webkit-scrollbar {
  width:  6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background:    var(--color-border-secondary);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-fg-quaternary);
}
```

Fade scrollbar when not scrolling (opacity: 0 after 1.5s, restore on scroll).

---

### 8.6 Sticky Header

Header that sticks to top of scroll container.

```css
.sticky-header {
  position:      sticky;
  top:           0;
  z-index:       var(--z-sticky);
  background:    var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-secondary);
  backdrop-filter: blur(8px);
  background:    rgba(255, 255, 255, 0.9);
}
```

---

### 8.7 Portal

React Portal usage for elements that must escape parent stacking context (modals, tooltips, toasts). Always mount to `document.body` or a dedicated `#portal-root` element. Ensure proper z-index from scale.

---

## Section 09 — Media & Rich Content

### 9.1 Image

```css
.image {
  display:    block;
  max-width:  100%;
  height:     auto;
  border-radius: var(--radius-md);
  border:     1px solid var(--color-border-secondary);
}

/* Loading skeleton */
.image-loading {
  background: var(--color-bg-active);
  animation:  shimmer 1.5s ease-in-out infinite;
}
```

**Variants:** Rounded (default), Circle (avatar), Full-bleed (no border-radius). Click to expand: lightbox modal with navigation arrows for galleries.

---

### 9.2 Video Player

Custom-styled HTML5 video player.

```css
.video-player {
  position:      relative;
  background:    #000;
  border-radius: var(--radius-md);
  overflow:      hidden;
  aspect-ratio:  16/9;
}
```

**Controls overlay (bottom, fade on hover):**
- Play/Pause (space key)
- Seek bar (progress style, `--color-primary` fill)
- Volume control
- Time display (14px monospace)
- Fullscreen button

---

### 9.3 Audio Player

Compact horizontal player.

```css
.audio-player {
  display:       flex;
  align-items:   center;
  gap:           var(--spacing-md);
  background:    var(--color-bg-active);
  border:        1px solid var(--color-border-secondary);
  border-radius: var(--radius-full);
  padding:       var(--spacing-md) var(--spacing-xl);
}
```

Controls: Play/Pause (32px circle, `--color-primary`) + Seek bar + Time + Speed selector (0.5×, 1×, 1.5×, 2×) + Volume.

---

### 9.4 PDF Viewer

Embedded iframe or PDF.js viewer within a panel.

```css
.pdf-viewer {
  border:        1px solid var(--color-border-secondary);
  border-radius: var(--radius-md);
  overflow:      hidden;
  height:        600px;
}
```

Toolbar: Page navigation (prev/next + input) + Zoom controls + Download + Fullscreen.

---

### 9.5 Map Embed

Iframe map (Google Maps, Mapbox) within a card.

```css
.map-embed {
  border-radius: var(--radius-md);
  overflow:      hidden;
  border:        1px solid var(--color-border-secondary);
  aspect-ratio:  16/9;
}
```

---

### 9.6 Chart Container

Wraps any charting library (Recharts, Chart.js, Tremor) with consistent styling.

```css
.chart-container {
  background:    var(--color-bg-primary);
  border:        1px solid var(--color-border-secondary);
  border-radius: var(--radius-lg);
  padding:       var(--spacing-2xl);
  box-shadow:    var(--shadow-xs);
}

.chart-title {
  font-size:     16px;
  font-weight:   600;
  color:         var(--color-fg-primary);
  margin-bottom: var(--spacing-xs);
}

.chart-subtitle {
  font-size:     13px;
  color:         var(--color-fg-tertiary);
  margin-bottom: var(--spacing-xl);
}
```

**Chart color palette (ordered, using brand primitives):**

```css
--chart-color-1: #6459fe;  /* primary */
--chart-color-2: #a98aff;  /* violet */
--chart-color-3: #4285f4;  /* azure/info */
--chart-color-4: #34a853;  /* green */
--chart-color-5: #ffba00;  /* orange */
--chart-color-6: #e94235;  /* red */
--chart-color-7: #85c2ff;  /* azure light */
--chart-color-8: #e3acfd;  /* violet light */
```

---

## Section 10 — Utility / Misc

### 10.1 Keyboard Shortcut Hint

Inline display of keyboard shortcuts.

```css
kbd {
  display:        inline-flex;
  align-items:    center;
  justify-content: center;
  background:     var(--color-bg-active);
  border:         1px solid var(--color-border-secondary);
  border-bottom:  2px solid var(--color-border-primary);
  border-radius:  var(--radius-xs);
  padding:        1px var(--spacing-xs); /* 1px 4px */
  font-family:    var(--font-family-mono);
  font-size:      11px;
  color:          var(--color-fg-secondary);
  min-width:      20px;
  line-height:    18px;
}
```

**Combinations:** Multiple `<kbd>` elements separated by `+` text or a `<kbd>` wrapper:
```
⌘ + K      Ctrl + Shift + P
```

---

### 10.2 Command Palette

Full-screen overlay search/command launcher. Triggered by `⌘K` / `Ctrl+K`.

```css
/* Backdrop */
position:   fixed;
inset:      0;
background: rgba(10,13,18,0.4);
z-index:    var(--z-spotlight);
display:    flex;
align-items: flex-start;
justify-content: center;
padding-top: 15vh;

/* Panel */
background:    var(--color-bg-primary);
border:        1px solid var(--color-border-secondary);
border-radius: var(--radius-lg);
box-shadow:    var(--shadow-xl);
width:         560px;
max-height:    480px;
overflow:      hidden;
```

**Structure:**
1. Search input (full-width, 48px, no visible border, 16px font, leading search icon)
2. Divider
3. Results list (scrollable, 360px max)

**Result item:**
- Icon (16px) + Label (14px) + Optional shortcut badge (right)
- Height: 40px, hover: `--color-bg-active`
- Active/highlighted: `--color-primary-subtle`, `--color-primary` text

**Sections:** Recent, Suggestions, Actions — with 11px uppercase section labels in `--color-fg-quaternary`.

---

### 10.3 Color Swatch

Used in design system documentation and color pickers.

```css
.swatch {
  width:         40px;
  height:        40px;
  border-radius: var(--radius-sm);
  border:        1px solid rgba(0,0,0,0.1);
  cursor:        pointer;
}

.swatch-label {
  font-size:  11px;
  color:      var(--color-fg-tertiary);
  margin-top: var(--spacing-xs);
}
```

Hover tooltip: Shows hex value and token name.

---

### 10.4 Copy-to-Clipboard

Button utility to copy any text value.

```css
.copy-button {
  display:   inline-flex;
  align-items: center;
  gap:       var(--spacing-xs);
  font-size: 12px;
  color:     var(--color-fg-quaternary);
  cursor:    pointer;
  transition: color var(--duration-fast) var(--ease-out);
}

.copy-button:hover {
  color: var(--color-fg-primary);
}

.copy-button.copied {
  color: var(--color-success);
}
```

State transitions: default → copied (2s) → default. Icon changes from `copy` to `check`.

---

### 10.5 Resize Handle

Draggable handle for resizable panels or drawers.

```css
.resize-handle {
  background:   transparent;
  cursor:       ew-resize;  /* or ns-resize for vertical */
  z-index:      var(--z-raised);
  transition:   background var(--duration-fast) var(--ease-out);
}

.resize-handle:hover,
.resize-handle.dragging {
  background: var(--color-primary) at 30% opacity;
}
```

Horizontal: 4px wide × 100% tall. Vertical: 100% wide × 4px tall.

---

### 10.6 Scroll-to-Top

Button that appears when user scrolls down > 400px. Fixed bottom-center or bottom-right.

```css
.scroll-to-top {
  position:      fixed;
  bottom:        var(--spacing-4xl);
  right:         var(--spacing-4xl);
  width:         40px;
  height:        40px;
  border-radius: var(--radius-full);
  background:    var(--color-bg-primary);
  border:        1px solid var(--color-border-secondary);
  box-shadow:    var(--shadow-md);
  display:       flex;
  align-items:   center;
  justify-content: center;
  cursor:        pointer;
  z-index:       var(--z-raised);
  animation:     fadeInUp var(--duration-base) var(--ease-spring);
}
```

Icon: `chevron-up` or `arrow-up` 20px, `--color-fg-secondary`. Hover: `--color-primary`.

---

### 10.7 404 / Error Page

Full-page error state for navigation failures or server errors.

**Layout:** Centered vertically and horizontally in viewport.

```
     [Error illustration or large code: 404]

     Page Not Found

     The page you're looking for doesn't exist or has been moved.

     [← Go Home]     [Contact Support]
```

**Styles:**
- Error code: 96px, 700 weight, `--color-border-secondary` (light, decorative)
- Heading: 30px, 700, `--color-fg-primary`
- Body: 16px, `--color-fg-secondary`, max-width 440px, centered
- Buttons: Primary "Go Home" + Ghost "Contact Support"

**500 Error variant:** Change copy to "Something went wrong" / "We're experiencing technical difficulties. Please try again."

**Offline variant:** Change copy to "No Internet Connection" / "Check your network and try again." Add retry button.

---

## Appendix

### A. CSS Custom Properties Reference

All design tokens should be defined in `:root` or a theme provider:

```css
:root {
  /* Colors */
  --color-primary:           #6459fe;
  --color-primary-hover:     #5149de;
  --color-primary-active:    #3c2cb8;
  --color-primary-subtle:    #0a12170d;
  --color-bg-primary:        #ffffff;
  --color-bg-active:         #fafafa;
  --color-fg-primary:        #0a1217;
  --color-fg-secondary:      #4b5563;
  --color-fg-tertiary:       #717680;
  --color-fg-quaternary:     #a4a7ae;
  --color-fg-on-color:       #ffffff;
  --color-border-secondary:  #e9eaeb;
  --color-border-focus:      #6459fe;
  --color-destructive:       #e94235;
  --color-warning:           #ffba00;
  --color-success:           #34a853;
  --color-success-secondary: #17b26a;
  --color-info:              #4285f4;

  /* Typography */
  --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Spacing */
  --spacing-xxs: 2px;
  --spacing-xs:  4px;
  --spacing-sm:  6px;
  --spacing-md:  8px;
  --spacing-lg:  12px;
  --spacing-xl:  16px;
  --spacing-2xl: 20px;
  --spacing-3xl: 24px;
  --spacing-4xl: 32px;

  /* Radius */
  --radius-sm:   6px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-32:   32px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0px 1px 2px 0px #0a0d120d;

  /* Motion */
  --duration-fast:  100ms;
  --duration-base:  200ms;
  --duration-slow:  400ms;
  --ease-out:       cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);

  /* Layout */
  --width-chat-max:          868px;
  --height-nav:              56px;
  --sidebar-width-collapsed: 64px;
  --sidebar-width-expanded:  260px;
}

/* ─── Dark Mode Overrides ─────────────────────────────────────── */
[data-theme="dark"],
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {

    /* Semantic */
    --color-primary:            #8282ff;
    --color-primary-hover:      #6868f7;
    --color-primary-active:     #6459fe;
    --color-primary-subtle:     rgba(130, 130, 255, 0.12);
    --color-primary-muted:      rgba(130, 130, 255, 0.40);
    --color-secondary:          #a98aff;
    --color-secondary-hover:    #bd96ff;
    --color-secondary-active:   #8282ff;
    --color-destructive:        #f87171;
    --color-destructive-hover:  #fca5a5;
    --color-destructive-subtle: rgba(248, 113, 113, 0.12);
    --color-warning:            #fbbf24;
    --color-warning-hover:      #fcd34d;
    --color-warning-subtle:     rgba(251, 191, 36, 0.12);
    --color-success:            #34d399;
    --color-success-hover:      #6ee7b7;
    --color-success-subtle:     rgba(52, 211, 153, 0.12);
    --color-success-secondary:  #17b26a;
    --color-info:               #85c2ff;
    --color-info-hover:         #a1d3ff;
    --color-info-subtle:        rgba(133, 194, 255, 0.12);

    /* Surface */
    --color-bg-primary:         #0c0e12;
    --color-bg-secondary:       #141720;
    --color-bg-tertiary:        #1c2028;
    --color-bg-active:          #1e2230;
    --color-bg-disabled:        #1a1d25;
    --color-bg-overlay:         rgba(0, 0, 0, 0.70);
    --color-bg-inset:           #10131a;

    /* Foreground */
    --color-fg-primary:         #f0f2f5;
    --color-fg-secondary:       #c8ccd4;
    --color-fg-tertiary:        #8c909a;
    --color-fg-quaternary:      #4b5563;
    --color-fg-disabled:        #2a2f3a;
    --color-fg-on-color:        #ffffff;
    --color-fg-success:         #34d399;
    --color-fg-destructive:     #f87171;
    --color-fg-warning:         #fbbf24;
    --color-fg-info:            #85c2ff;

    /* Border */
    --color-border-primary:     #2a2f3a;
    --color-border-secondary:   #1f2430;
    --color-border-tertiary:    #161a22;
    --color-border-focus:       #8282ff;
    --color-border-error:       #f87171;
    --color-border-success:     #34d399;

    /* Shadows */
    --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
    --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.40), 0px 1px 2px -1px rgba(0, 0, 0, 0.40);
    --shadow-md: 0px 4px 6px -1px rgba(0, 0, 0, 0.40), 0px 2px 4px -2px rgba(0, 0, 0, 0.40);
    --shadow-lg: 0px 10px 15px -3px rgba(0, 0, 0, 0.40), 0px 4px 6px -4px rgba(0, 0, 0, 0.40);
    --shadow-xl: 0px 20px 25px -5px rgba(0, 0, 0, 0.40), 0px 8px 10px -6px rgba(0, 0, 0, 0.40);

    /* AI Glows */
    --glow-primary:             0px 0px 20px 0px rgba(130, 130, 255, 0.45);
    --glow-streaming:           0px 0px 10px 0px rgba(130, 130, 255, 0.30);
  }
}
```

---

### B. Accessibility Guidelines

- **Color contrast:** All text must meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)
- **Focus indicators:** All interactive elements must have a visible focus ring (2px solid `--color-border-focus` + 2px offset)
- **Motion:** Always respect `prefers-reduced-motion: reduce` — disable or minimize animations
- **Icons:** Decorative icons use `aria-hidden="true"`. Functional icon-only buttons require `aria-label`
- **Forms:** Labels must be programmatically associated with inputs via `htmlFor` / `aria-labelledby`
- **Modals:** Trap focus within modal when open. Return focus to trigger on close
- **Color alone:** Never use color as the only means to convey information (add icons or text labels)
- **Keyboard navigation:** All interactions must be achievable without a mouse

---

### C. Component Naming Conventions

| Pattern | Example |
|---|---|
| PascalCase for components | `ChatInputBar`, `ConversationListItem` |
| kebab-case for CSS classes | `.chat-input-bar`, `.conversation-list-item` |
| camelCase for props | `isDisabled`, `onSubmit`, `showLabel` |
| UPPER_SNAKE_CASE for constants | `MAX_CHAT_WIDTH`, `DEFAULT_MODEL` |
| `--prefix-category-name` for tokens | `--color-fg-primary`, `--spacing-xl` |

---

*Enterprise Brain Design System — v1.0 — March 2026*
