import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AboutPopup from './components/AboutPopup.vue'

document.title = 'Mosaicofy - Beta';

const app = createApp(App)
app.use(router)
app.component('about-popup', AboutPopup);
app.mount('#app')
