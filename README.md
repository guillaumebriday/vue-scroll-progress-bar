# vue-scroll-progressbar

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/guillaumebriday)
[![](https://img.shields.io/npm/dt/vue-scroll-progressbar.svg)](https://www.npmjs.com/package/vue-scroll-progressbar)
[![](https://img.shields.io/npm/v/vue-scroll-progressbar.svg)](https://www.npmjs.com/package/vue-scroll-progressbar)
[![](https://img.shields.io/github/license/guillaumebriday/vue-scroll-progressbar.svg)](https://github.com/guillaumebriday/vue-scroll-progressbar)

## Getting started

## Install

```bash
$ npm install vue-scroll-progressbar --save
```

or

```bash
$ yarn add vue-scroll-progressbar
```

Install the plugin into Vue:
```js
import Vue from 'vue'
import VueScrollProgressBar from 'vue-scroll-progressbar'

Vue.use(VueScrollProgressBar)
```

Or use the component directly:

```js
import Vue from 'vue'
import VueScrollProgressBar from 'vue-scroll-progressbar'

Vue.component("vue-scroll-progress-bar", VueScrollProgressBar)
```

## Basic Usage

```html
<template>
  <div id="app">
    <vue-scroll-progress-bar @complete="handleComplete" height="2rem" />
  </div>
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
```
$ cd examples
$ yarn install
```

### Compiles and hot-reloads for development
```
$ yarn run serve
```

### Compiles and minifies for production
```
$ yarn run build
```

### Run your tests
```
$ yarn run test
```

### Lints and fixes files
```
$ yarn run lint
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
