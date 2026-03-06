# Sass Optimization & Production Checklist

## 🛡️ Pre-emptive Performance

- [ ] **Avoid excessive nesting**: Go no deeper than 3 levels to keep specificity low and CSS readable.
- [ ] **Use BEM methodology**: `block__element--modifier` ensures flat specificity.
- [ ] **Modular Imports**: Use `@use "math" as math;` only where needed.

## ⚡ Deployment Chain

1. **Dart Sass**: Compile SCSS to CSS.
2. **PostCSS + Autoprefixer**: Add vendor prefixes based on `browserslist`.
3. **PurgeCSS**: Remove unused CSS classes from the final bundle.
4. **CSSNano**: Minify and compress the output.

## 🎯 Critical CSS Strategy

1. Identify "Above the Fold" styles.
2. Use tools like `critical` to extract them.
3. Inline the extracted CSS in the HTML `<head>`:
   ```html
   <style>
     /* Critical CSS */
   </style>
   <link
     rel="stylesheet"
     href="app.css"
     media="print"
     onload="this.media='all'"
   />
   ```

## 📉 Content Visibility

For sections not immediately visible:

```scss
.off-screen-content {
  content-visibility: auto;
  contain-intrinsic-size: 1px 5000px; /* Predict height to avoid layout shift */
}
```
