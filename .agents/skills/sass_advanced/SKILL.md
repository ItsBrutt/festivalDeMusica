---
name: sass_advanced
description: Advanced Sass Architecture, Optimization, and Professional Standard (Dart Sass 3.0)
---

# Advanced Sass Architecture and Optimization

This skill provides the comprehensive standards for building scalable, maintainable, and high-performance CSS architectures using Dart Sass.

## 🚨 Mandatory: Dart Sass 3.0 Standards

- **Abolish `@import`**: Use `@use` and `@forward` exclusively. This prevents namespace pollution and redundant recompilation.
- **Namespacing**: Prefix internal module functions and variables. (e.g., `variables.$primary-color` becomes `v.$primary-color` via `@use "variables" as v`).
- **Built-in Modules**: Use `sass:color`, `sass:math`, `sass:map`, `sass:list` instead of global functions (e.g., `color.adjust()` instead of `darken()`).

## 🏗️ Architecture: The 7-1 Pattern & ITCSS

Follow the 7-1 pattern to organize the codebase into dedicated directories:

1.  **Abstracts/**: (Silent) Variables, functions, mixins, placeholders.
2.  **Vendors/**: Third-party libraries (Bootstrap, Swiper).
3.  **Base/**: Reset, typography, global element styles.
4.  **Layout/**: Macro-structures (Header, Footer, Grid).
5.  **Components/**: Reusable, independent UI elements (Buttons, Cards).
6.  **Pages/**: Page-specific styles (Home, Checkout).
7.  **Themes/**: Theming logic (Dark mode, Multi-tenant).

**ITCSS Principle**: Code must flow from low specificity (Base) to high specificity (Pages/Utilities).

## 🚀 Optimization & Performance

- **Mixins vs. Placeholders**:
  - Use `@mixin` for **dynamic** styles (parametrized).
  - Use `%placeholder` with `@extend` for **static** shared styles to prevent CSS Bloat via selector grouping.
- **Fluid Design**: Use the algebraic `clamp()` formula for fluid typography and spacing to reduce media query reliance.
- **Critical CSS**: Extract "above the fold" styles and inline them in the `<head>`.
- **Tree-Shaking**: Use PurgeCSS or similar during post-processing to remove unused utility classes.

## 🛠️ Design Tokens

- **Primal Tokens**: Absolute values defined in Sass Maps (e.g., `$colors: ( blue-600: #004ecc )`).
- **Semantic Tokens**: Contextual CSS Custom Properties mapped to Primal Tokens (e.g., `--bg-primary: #{map.get($colors, blue-600)}`).

## 📚 Resources

- [7-1 Architecture Detailed Guide](./resources/7-1-architecture.md)
- [Optimization Checklist](./resources/optimization-checklist.md)

## 💡 Code Examples

- [Fluid Typography Implementation](./examples/fluid-typography.scss)
- [Mixins vs Placeholders Efficiency](./examples/mixins-vs-placeholders.scss)
