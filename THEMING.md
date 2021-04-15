# Theming SMUI

SMUI is themed using Sass variables. Each component has a `_index.scss` file that attempts to @use "smui-theme". (Then it @use "./style", which actually outputs the style of the component.) The "smui-theme" needs to resolve to a file within your Sass includes, so it is generally recommended to create a "theme" directory in your source folder with a "\_smui-theme.scss" file inside it, and provide this as one of your Sass include paths.

Inside that file is where you will place your Sass variables for MDC-Web to read. You can follow the READMEs of the MDC-Web components to learn how to style the components. The most important one (and probably the only one you want) is setting the [theme colors](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-theme#color-scheme). For the Material color palette, you can @use ["@material/theme/color-palette"](https://github.com/material-components/material-components-web/blob/v10.0.0/packages/mdc-theme/_color-palette.scss). You might also want to style the [border radius variables](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-shape#sass-variables).

Here is an example "\_smui-theme.scss" file you can use as a starting point for your own theme.

```scss
@use 'sass:color';
@use '@material/theme/color-palette';

$background: #fff;

@use '@material/theme' with (
  $primary: color-palette.$purple-500,
  $secondary: color-palette.$teal-600,
  $surface: #fff,
  $background: $background,
  $error: #b00020,
);

html,
body {
  background-color: $background;
  color: if(theme.contrast-tone($background) == 'dark', #000, #fff);
}

a {
  color: color-palette.$blue-500;
}
a:visited {
  color: color.scale(color-palette.$blue-500, $lightness: -50%);
}
```

## Dark Mode

The best way to implement a dark mode is to recompile the Sass with a different theme. This involves running the same code through your bundler again with a different Sass configuration. The demo site accomplishes this within Sapper by using the following modified code from the Sapper installation instructions.

```js
import fs from 'fs';

// ...

const postcssOptions = (light) => ({
  extensions: ['.scss'],
  extract: `smui.css`,
  minimize: true,
  onExtract: light
    ? null
    : (getExtracted) => {
        let { code } = getExtracted();
        const result = require('cssnano')
          .process(code, { from: undefined })
          .then(({ css }) => {
            const filename = `${config.client.output().dir}/smui-dark.css`;
            fs.writeFileSync(filename, css);
          });
        return false;
      },
  use: [
    [
      'sass',
      {
        includePaths: [`./src/theme${light ? '' : '/dark'}`, './node_modules'],
      },
    ],
  ],
});
```

This requires a separate "\_smui-theme.scss" file in a new directory under your "theme" directory named "dark". This file should contain your dark theme configuration.

If you followed the Sapper installation instructions, and modified the function above, you will now get an additional output file named "smui-dark.css". This is your compiled dark theme.

Now let's get it on your page. In your template, where you included the "smui.css" file, instead use the following.

```html
<!-- SMUI Styles -->
<link
  rel="stylesheet"
  href="client/smui.css"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="stylesheet"
  href="client/smui-dark.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```

This will get your dark theme working if the user has expressed a preference in their OS. To let the user choose which theme while on your site, you can do something like the following.

```js
let theme =
  typeof window === 'undefined' ||
  window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
function switchTheme() {
  theme = theme === 'light' ? 'dark' : 'light';
  let themeLink = document.head.querySelector('#theme');
  if (!themeLink) {
    themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
  }
  themeLink.href = `client/smui${theme === 'light' ? '' : '-dark'}.css`;
  document.head.appendChild(themeLink);
}
```

Now just call `switchTheme()` from a toggle button or something, and the theme will be switched to the other one.

## Theming the Bare CSS

If you don't want to (or can't) theme SMUI using Sass variables, and instead include the bare CSS for each component, you can set a subset of the theme options with CSS variables. Note that not all of the colors in SMUI read from CSS variables, so some parts will still use the colors defined in the original Sass compile. Below is a copy of the variables from the CSS on the SMUI website. You can use this as a starting point for your own theme.

```css
/* Theme colors. */
:root {
  --mdc-theme-primary: #ff3e00;
  --mdc-theme-secondary: #676778;
  --mdc-theme-background: #fff;
  --mdc-theme-surface: #fff;
  --mdc-theme-error: #b71c1c;
  --mdc-theme-on-primary: #fff;
  --mdc-theme-on-secondary: #fff;
  --mdc-theme-on-surface: #000;
  --mdc-theme-on-error: #fff;
  --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
  --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-primary-on-dark: #fff;
  --mdc-theme-text-secondary-on-dark: hsla(0, 0%, 100%, 0.7);
  --mdc-theme-text-hint-on-dark: hsla(0, 0%, 100%, 0.5);
  --mdc-theme-text-disabled-on-dark: hsla(0, 0%, 100%, 0.5);
  --mdc-theme-text-icon-on-dark: hsla(0, 0%, 100%, 0.5);
}

/* Layout grid spacing. */
:root {
  --mdc-layout-grid-margin-desktop: 24px;
  --mdc-layout-grid-gutter-desktop: 24px;
  --mdc-layout-grid-column-width-desktop: 72px;
  --mdc-layout-grid-margin-tablet: 16px;
  --mdc-layout-grid-gutter-tablet: 16px;
  --mdc-layout-grid-column-width-tablet: 72px;
  --mdc-layout-grid-margin-phone: 16px;
  --mdc-layout-grid-gutter-phone: 16px;
  --mdc-layout-grid-column-width-phone: 72px;
}
```