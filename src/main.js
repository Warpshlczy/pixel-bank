import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import apis from '@/apis/api'
import VueRouter from 'vue-router'
import router from '@/router/router'

Vue.config.productionTip = false
Vue.prototype.$api = apis
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

new Vue({
  axios,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
