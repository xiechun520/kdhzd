import Vue from 'vue'
import App from './App'

import store from './store'

import axios from './Api'
import baseUrl from './Api/baseUrl'

Vue.prototype.$axios =axios;
Vue.prototype.$baseUrl =baseUrl;


import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
