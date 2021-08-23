import { createApp } from 'vue'
import App from './App.vue'
import naive_ui from './plugins/naive-ui'
import router from './router'
const app = createApp(App)
app.use(naive_ui)
app.use(router)
app.mount('#app')
