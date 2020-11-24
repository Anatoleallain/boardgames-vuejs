import { createApp } from 'vue'

import './assets/style/main.css'
import BaseButton from './components/global/BaseButton'

import App from './App.vue'
import router from './router.js'



const app = createApp(App);

app.use(router)

app.component('base-button', BaseButton)

app.mount('#app')
