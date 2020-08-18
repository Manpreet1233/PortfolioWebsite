import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueParticles)
        
Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')


