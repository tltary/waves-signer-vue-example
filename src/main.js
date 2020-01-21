import Vue from 'vue'
import App from './App.vue'
import VueSigner from 'vue-waves-signer'

Vue.use(VueSigner, {
  debug: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
