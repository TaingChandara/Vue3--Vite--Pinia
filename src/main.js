import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import './style/global.css'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
