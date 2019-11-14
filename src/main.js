// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview'
// CSSの読み込み
import 'iview/dist/styles/iview.css'
// 日本語対応
import locale from 'iview/dist/locale/ja-JP'

Vue.use(iView, { locale })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
