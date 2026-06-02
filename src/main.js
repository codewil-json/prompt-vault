import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { persistedState } from './store/promptStore'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const pinia = createPinia()
pinia.use(persistedState)

createApp(App).use(router).use(pinia).mount('#app')
