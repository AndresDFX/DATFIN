import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'




Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.component('panel', Panel)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
