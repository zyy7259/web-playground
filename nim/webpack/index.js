/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-01-28T16:58:16+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-15T12:59:45+08:00
*/

require('Web_SDK_Base_v2.7.0');
var NIM = require('Web_SDK_NIM_v2.7.0');
var Chatroom = require('Web_SDK_Chatroom_v2.7.0');

console.log(NIM.info);
console.log(Chatroom.info);

var nim = window.nim = NIM.getInstance({
  appKey: '45c6af3c98409b18a84451215d0bdd6e',
  account: 'zyy1',
  token: 'e10adc3949ba59abbe56e057f20f883e'
})

console.log(nim)
