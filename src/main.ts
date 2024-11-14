import './assets/main.css'
import App from './App.vue'
import router from './router'

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// vant
import 'vant/lib/index.css';
import './vant-locale'; 
import { DatePicker } from 'vant';
import { Tab, Tabs } from 'vant';

// vue
import { createApp } from 'vue'

// pinia
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())

// router
app.use(router)

// vant
app.use(DatePicker)
app.use(Tab);
app.use(Tabs);

app.mount('#app')
