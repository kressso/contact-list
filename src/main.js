import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './assets/scss/style.scss';
import router from './router';
import store from './store';
import './utils/globalComponentImport';

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
