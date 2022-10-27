import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import lmButton from './components/新版按钮.vue'
//引入图标
//import './assets/icon.js';
import './assets/icon2.js';
//引入图标组件
//import lmicon from '@/components/icons/Icon.vue'



//创建vue实例
const app = createApp(App)
//注册pinia
app.use(createPinia())
//注册路由
app.use(router)



//全局注册的组件
//app.component('注册的名字', 菜单)
//app.component('icon', lmicon)
app.component('lmb', lmButton)

//挂载点
app.mount('#入口')
