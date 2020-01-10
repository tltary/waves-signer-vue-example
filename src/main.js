import Vue from 'vue'
import App from './App.vue'

import Signer from '@waves/signer';
import Provider from '@waves.exchange/provider-web';

// Testnet setup
const signer = new Signer({ NODE_URL: 'https://pool.testnet.wavesnodes.com' });
signer.setProvider(new Provider('https://testnet.waves.exchange/signer'));

// Mainnet setup
//const signer = new Signer();
//signer.setProvider(new Provider());

Vue.prototype.signer = signer;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
