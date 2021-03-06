import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import vuetify from '@/plugins/vuetify'


// Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
