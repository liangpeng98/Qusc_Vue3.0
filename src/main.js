import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import './lib/rem'
import 'vant/lib/index.css'
import './assets/less/index.less'
import Navbar from 'com/Navbar.vue'

createApp(App)
  .use(store)
  .use(router)
  .use(Vant)
  .component('Navbar', Navbar)
  .mount('#app')
