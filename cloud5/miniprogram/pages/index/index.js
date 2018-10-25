const db = wx.cloud.database();
const photos = db.collection('userinfo');


Page({
  data: {
    userList: []
  },
  getUserInfo: function(result){
    console.log(result);
    // OpenId 是用户独有的，我们拿不到，小程序的云函数可以拿到
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        // userinfo.add({
        //   data: result.detail.userInfo
        // }).then(res => {
        //   console.log(res)
        // })
        console.log(res)
      }
    })
  },
  // onShareAppMessage: (res) => {
  //   return {
  //     title: '妈耶',
  //     path: '/pages/index/index',
  //     imageUrl:'https://636f-codingdream-74b4e5-1256758450.tcb.qcloud.la/687434.png',
  //     success: res => {
  //       console.log('转发成功')
  //     },
  //     fail: res => {
  //       console.log("失败")
  //     }
  //   }
  // }
})