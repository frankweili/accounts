import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue' //全局引入这个组件
import Icon from '@/components/Icon.vue'
import tagListModel from './models/tagListModel'
import recordListModel from './models/recordListModel'

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)  //全局引入这个组件
Vue.component('Icon', Icon)
Vue.config.productionTip = false

//record store
window.recordList = recordListModel.fetch()
window.createRecord=(record: RecordItem)=>recordListModel.create(record)
//tag store
window.tagList = tagListModel.fetch()       //定义到window上
window.findTag = (id: string) => {
  return window.tagList.filter((t) => t.id === id)[0];
}
window.createTag = (name: string) => { 

      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签重复");
      } else if (message === "success") {
        window.alert("添加成功");
      
    }
}
window.removeTag = (id: string) => { 
  if (tagListModel.remove(id)) {
  return true
  } else {
    return false
  }
}
window.updateTag = (id: string, name: string) => { 
  return tagListModel.update(id, name);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
