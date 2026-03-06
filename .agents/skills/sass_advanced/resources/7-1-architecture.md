# 7-1 Architecture & ITCSS Guide

## The 7-1 Folder Structure

Each directory has a specific role in the cascade. All files must be "partials" (prefixed with `_`).

### 1. `abstracts/`

Global configuration. No CSS output should be generated here.

- `_variables.scss`: Design tokens and primitive values.
- `_mixins.scss`: Reusable functions and blocks.
- `_functions.scss`: Logic and calculations.

### 2. `base/`

Foundational styles.

- `_reset.scss` or `_normalize.scss`.
- `_typography.scss`: Base font sizes, families.
- `_global.scss`: Generic element styles (e.g., `body`, `a`).

### 3. `layout/`

Structural components.

- `_header.scss`, `_footer.scss`, `_grid.scss`.

### 4. `components/`

Independent chunks of UI.

- `_buttons.scss`, `_card.scss`, `_modal.scss`.

### 5. `pages/`

Styles specific to only one page.

- `_home.scss`, `_contact.scss`.

### 6. `themes/`

Theming variations (Light/Dark mode).

### 7. `vendors/`

External CSS.

- `_bootstrap.scss`, `_jquery-ui.scss`.

## Implementation in `app.scss`

The entry point should only contain `@use` (or `@forward`) statements in order:

```scss
@use "abstracts";
@use "vendors";
@use "base";
@use "layout";
@use "components";
@use "pages";
@use "themes";
```
