# vue-scroll-progress-bar

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/guillaumebriday)
[![](https://img.shields.io/npm/dt/@guillaumebriday/vue-scroll-progress-bar.svg)](https://www.npmjs.com/package/@guillaumebriday/vue-scroll-progress-bar)
[![](https://img.shields.io/npm/v/@guillaumebriday/vue-scroll-progress-bar.svg)](https://www.npmjs.com/package/@guillaumebriday/vue-scroll-progress-bar)
[![](https://img.shields.io/github/license/guillaumebriday/vue-scroll-progress-bar.svg)](https://github.com/guillaumebriday/vue-scroll-progress-bar)
[![Netlify Status](https://api.netlify.com/api/v1/badges/63086bf9-f804-451e-9319-052191432063/deploy-status)](https://app.netlify.com/sites/vue-scroll-progress-bar/deploys)

## Getting started

## Install

```bash
$ npm install @guillaumebriday/vue-scroll-progress-bar --save
```

or

```bash
$ yarn add @guillaumebriday/vue-scroll-progress-bar
```

Install the plugin into Vue:
```js
import Vue from 'vue'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'

Vue.use(VueScrollProgressBar)
```

Or use the component directly:

```js
import { VueScrollProgressBar } from '@guillaumebriday/vue-scroll-progress-bar'

export default {
  components: {
    VueScrollProgressBar
  },

  // ...
}
```

## Basic Usage

```html
<template>
  <vue-scroll-progress-bar @complete="handleComplete" height="2rem" />
</template>
```

## Props

|key|description|default|
|:---|---|---|
| `height`|Height of the progress bar|`'.5rem'`|
|`backgroundColor`|Background property of the progress bar|`'linear-gradient(to right, #38C172, #51D88A)'`|
|`barClass`|Class attribute of the progress bar|`'{}'`|
|`containerColor`|Background property of the progress bar container|`'transparent'`|
|`zIndex`|z-index property of the progress bar container|`'50'`|
|`containerClass`|Class attribute of the progress bar container|`'{"progress-bar-container--container": true}'`|

With :

```css
.progress-bar-container--container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
```

`containerClass` must be used to override the `.progress-bar-container--container` default class. You can use the default `:class` syntax on the component to add classes if needed.

## Events

|key|description|
|:---|---|
| `begin`|When scroll reached 0%|
|`complete`|When scroll reached 100%|

## Develop

## Project setup
```bash
$ yarn install
$ yarn build
```

## Open example app

```bash
$ cd example
$ yarn
$ yarn serve
```

### Lints and fixes files
```bash
$ yarn run lint
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
