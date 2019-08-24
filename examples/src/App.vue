<template>
  <div id="app">
    <vue-scroll-progress-bar />

    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>Scroll to see the progress bar !</h1>

      <p>
        <a v-for="(badge, index) in badges" :href="badge.url" :key="index">
          <img :src="badge.logo">
        </a>
      </p>

      <h2>Essential links</h2>

      <ul>
        <li>
          <a href="https://github.com/guillaumebriday/vue-scroll-progress-bar" target="_blank" rel="noopener">Github</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@guillaumebriday/vue-scroll-progress-bar" target="_blank" rel="noopener">Npm</a>
        </li>
      </ul>

      <h2>Install</h2>
      <pre>
        <code class="shell">
$ npm install @guillaumebriday/vue-scroll-progress-bar --save

or

$ yarn add @guillaumebriday/vue-scroll-progress-bar
        </code>
      </pre>

      <h2>Register the component</h2>
      <pre>
        <code class="javascript">
import Vue from 'vue'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'

Vue.use(VueScrollProgressBar)
        </code>
      </pre>

      <h2>Basic Usage</h2>

      <pre>
        <code class="html" v-pre>
&lt;template&gt;
  &lt;div&gt;
    &lt;vue-scroll-progress-bar @complete=&quot;handleComplete&quot; height=&quot;2rem&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export default {
  name: 'app',

  mounted() {
    hljs.initHighlightingOnLoad()
  },

  data () {
    return{
      badges: [
        {
          url: 'https://www.paypal.me/guillaumebriday',
          logo: 'https://img.shields.io/badge/Donate-PayPal-green.svg'
        },
        {
          url: 'https://www.npmjs.com/package/@guillaumebriday/vue-scroll-progress-bar',
          logo: 'https://img.shields.io/npm/dt/@guillaumebriday/vue-scroll-progress-bar.svg'
        },
        {
          url: 'https://www.npmjs.com/package/@guillaumebriday/vue-scroll-progress-bar',
          logo: 'https://img.shields.io/npm/v/@guillaumebriday/vue-scroll-progress-bar.svg'
        },
        {
          url: 'https://github.com/guillaumebriday/vue-scroll-progress-bar',
          logo: 'https://img.shields.io/github/license/guillaumebriday/vue-scroll-progress-bar.svg'
        },
        {
          url: 'https://app.netlify.com/sites/vue-scroll-progress-bar/deploys',
          logo: 'https://api.netlify.com/api/v1/badges/63086bf9-f804-451e-9319-052191432063/deploy-status'
        },
      ]
    }
  }
}
</script>

<style>
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 300vh;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 768px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  margin: 0 .25rem;
}

pre code {
  border-radius: .5rem;
  text-align: left;
  font-family: Menlo, 'Courier New', Courier, monospace;
}
</style>
