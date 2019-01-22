<template>
  <div id="app">
    <vue-scroll-progress-bar />

    <div class="long-text">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>Scroll to see the progress bar !</h1>

      <h3>Essential Links</h3>

      <ul>
        <li>
          <a href="https://github.com/guillaumebriday/vue-scroll-progressbar" target="_blank" rel="noopener">Github</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/vue-scroll-progressbar" target="_blank" rel="noopener">Npm</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.long-text {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 300vh;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
}
</style>
