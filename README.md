# @soar-icons/react

React components for Soar Icons.

## Install

This package is not published to npm. Install via the Git monorepo. The path forward will be GitHub Packages once that's set up; until then:

**Option A — Add the whole repo as a workspace.** If your app is in a pnpm/yarn workspace, clone `soar-icons` next to it and add `packages/react` to your `workspaces`/`pnpm-workspace.yaml`. Then:

```jsonc
{
  "dependencies": {
    "@soar-icons/react": "workspace:*"
  }
}
```

**Option B — Git submodule.** Add this repo as a submodule and use a path dependency.

```bash
git submodule add https://github.com/soar-design/soar-icons vendor/soar-icons
```

```jsonc
{
  "dependencies": {
    "@soar-icons/react": "link:./vendor/soar-icons/packages/react"
  }
}
```

Make sure `react` (>=18) is also a dependency of your app — it's a peer dep here.

## Usage

```tsx
import { Home01 } from "@soar-icons/react";

export function Example() {
  return (
    <>
      <Home01 />
      <Home01 style="solid" />
      <Home01 style="bulk" className="text-blue-500" />
      <Home01 style="solid" size={32} />
      <Home01 style="bulk" color="#ff8800" title="Home" />
    </>
  );
}
```

Component names match Hugeicons one-to-one (minus the `Icon` suffix): `<AArrowDown />`, `<AccountSetting01 />`, `<Home01 />` … `<Home13 />`, `<HomeWifi />`, etc. Browse `icons/manifest.json` from the root of the repo for the full list.

## Props

| Prop      | Type                              | Default        |
| --------- | --------------------------------- | -------------- |
| `style`   | `"line" \| "solid" \| "bulk"`     | `"line"`       |
| `size`    | `number \| string`                | `"1em"`        |
| `color`   | `string`                          | `currentColor` |
| `title`   | `string`                          | —              |
| `className`, `onClick`, ... | All standard `<svg>` props pass through | — |

### Notes

- **`style` is the icon style, not CSS.** For CSS, use `className`. (The CSS `style` prop on per-icon components is intentionally not exposed to keep the typed API clean.)
- **Color**: by default the icon paints with `currentColor`, so any CSS that sets `color` (Tailwind's `text-*` utilities, design-token variables, etc.) just works. Pass `color="..."` to override.
- **Size**: `"1em"` makes icons scale with the surrounding font size — set `text-base`/`text-xl`/etc. and the icon follows. Pass a number/string for fixed sizing.
- **Bulk**: the secondary tone is derived from your single `color` at 40% opacity. You don't pass two colors.
- **Accessibility**: pass `title` for icons that convey meaning. Without it, the SVG is `aria-hidden` (decorative).

## Available icons

See [`@soar-icons/core`'s manifest](../core/README.md) for the full list.
