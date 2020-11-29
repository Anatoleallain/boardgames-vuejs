import { createApp } from 'vue'


import './assets/style/main.css'
import BaseButton from './components/global/BaseButton'
import BasketButton from "./components/global/BasketButton";

import App from './App.vue'
import router from './router.js'
import store from './store.js'


const app = createApp(App);


app.use(router)
app.use(store)

app.component('base-button', BaseButton)
app.component('BasketButton', BasketButton)

app.mount('#app')
