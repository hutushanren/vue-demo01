import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import axios from "@/utils/http.ts";

// axios.defaults.baseURL="http://localhost:8082/"
const app = createApp(App)
app.config.globalProperties.$http= axios
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
