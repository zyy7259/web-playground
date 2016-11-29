// all
// const NIMSDK = require('Web_SDK_NIMSDK_v3.1.0_test')
// const NIM = NIMSDK.NIM
// const Chatroom = NIMSDK.Chatroom

// single
const NIM = require('Web_SDK_NIM_v3.1.0_test');
const Chatroom = require('Web_SDK_Chatroom_v3.1.0_test');

console.log(NIM.info);
console.log(Chatroom.info);

var nim = window.nim = NIM.getInstance({
  debug: true,
  appKey: 'fe416640c8e8a72734219e1847ad2547',
  account: 'zyy1',
  token: 'e10adc3949ba59abbe56e057f20f883e',
  onsyncdone: function () {
    console.log('sync done')
  }
})

console.log(nim)
