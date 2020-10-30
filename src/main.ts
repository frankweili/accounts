import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue' //全局引入这个组件
import Icon from '@/components/Icon.vue'

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)  //全局引入这个组件
Vue.component('Icon', Icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
