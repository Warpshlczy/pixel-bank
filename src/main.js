import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import apis from '@/apis/api'
import VueRouter from 'vue-router'
import router from '@/router/router'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$api = apis
Vue.use(VueRouter)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
