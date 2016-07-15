import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

import '../../js/Web_SDK_Base_v2.7.0'

var NIM = require('../../js/Web_SDK_NIM_v2.7.0')
var Chatroom = require('../../js/Web_SDK_Chatroom_v2.7.0')

console.log(NIM.info)
console.log(Chatroom.info)

var nim = window.nim = NIM.getInstance({
  appKey: '45c6af3c98409b18a84451215d0bdd6e',
  account: 'zyy1',
  token: 'e10adc3949ba59abbe56e057f20f883e'
})

console.log(nim)
