import Vue from 'vue'
import App from './App'
// import router from './router'
import payInput from '@/components/index.js'
console.log('tag', payInput)
Vue.use(payInput)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
