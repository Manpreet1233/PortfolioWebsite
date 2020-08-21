import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueParticles from 'vue-particles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ArtGallery from './components/ArtGallery.vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

Vue.use(VueRouter)

const routes = [
  { path: '/artGallery', component:  ArtGallery}
]

const router = new VueRouter ({
  routes,
  mode: 'history'
})

Vue.use(VueParticles)
        
Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')


