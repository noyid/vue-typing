import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// 全局注册
// import Typing from './components/Typing'
// import Typing.css from './components/Typing.css'
// Vue.use(Typing)

new Vue({
  render: h => h(App),
}).$mount('#app')
