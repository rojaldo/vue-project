import './assets/main.css'

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// vant
import 'vant/lib/index.css';
import './vant-locale'; 
import { DatePicker } from 'vant';

// vue
import { createApp } from 'vue'

// pinia
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(DatePicker)

app.mount('#app')
