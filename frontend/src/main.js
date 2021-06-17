import { createApp } from 'vue'
import VueContentPlaceholders from 'vue-content-loader'
import App from './App.vue'
import store from './store'

const app = createApp(App).use(store).mount('#app')

app.use(store)
app.use(VueContentPlaceholders)