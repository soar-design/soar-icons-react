# @soar-icons/react

React components for Soar Icons.

## Install

This package is not published to npm. Install via the Git monorepo. The path forward will be GitHub Packages once that's set up; until then, the simplest options:

**Option A — Add the whole repo as a workspace.** If your app is in a pnpm/yarn workspace, clone `soar-icons` next to it and add `packages/react` to your `workspaces`/`pnpm-workspace.yaml`. Then:

```jsonc
// your app's package.json
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
import { Home } from "@soar-icons/react";

export function Example() {
  return (
    <>
      <Home />
      <Home variant="solid" />
      <Home variant="duo" className="text-blue-500" />
      <Home variant="remix" size={32} />
      <Home variant="flat" color="#ff8800" title="Home" />
    </>
  );
}
```

## Props

| Prop      | Type                                              | Default        |
| --------- | ------------------------------------------------- | -------------- |
| `variant` | `"line" \| "solid" \| "remix" \| "duo" \| "flat"` | `"line"`       |
| `size`    | `number \| string`                                | `"1em"`        |
| `color`   | `string`                                          | `currentColor` |
| `title`   | `string`                                          | —              |
| `className`, `style`, `onClick`, ... | All standard `<svg>` props pass through | — |

### Notes

- **Color**: by default the icon paints with `currentColor`, so any CSS that sets `color` (Tailwind's `text-*` utilities, design-token variables, etc.) just works. Pass `color="..."` to override.
- **Size**: `"1em"` makes icons scale with the surrounding font size — set `text-base`/`text-xl`/etc. and the icon follows. Pass a number/string for fixed sizing.
- **Two-tone**: `duo` and any other styles with two tones derive the secondary tone from your single `color` at 40% opacity. You don't pass two colors.
- **Accessibility**: pass `title` for icons that convey meaning. Without it, the SVG is `aria-hidden` (decorative).

## Available icons

See [`@soar-icons/core`'s manifest](../core/README.md) for the full list.
