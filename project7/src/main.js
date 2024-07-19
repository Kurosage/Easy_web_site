import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import VueLazyload from 'vue-lazyload'

const app = createApp(App)

// VueLazyload.install(App,{
//   loading: '../assets/picture.jpg', 
//   error: '../assets/picture.jpg', 
//   attempt: 1 
// })
app.use(VueLazyload)
app.mount('#app')
