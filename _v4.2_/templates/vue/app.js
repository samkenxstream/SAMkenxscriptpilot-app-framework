import Vue from 'vue';
import app from './app.vue';

Vue.config.devtools = false;
Vue.config.productionTip = false;

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(app),
});