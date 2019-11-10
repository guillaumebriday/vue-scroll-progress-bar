import Vue from 'vue'
import App from './App.vue'
import VueScrollProgressBar from "../../dist/vue-scroll-progress-bar.es"

Vue.config.productionTip = false

Vue.use(VueScrollProgressBar)
// Vue.component("vue-scroll-progress-bar", VueScrollProgressBar)

new Vue({
  render: h => h(App),
}).$mount('#app')
