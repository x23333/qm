wx.cloud.init({
})
const db = wx.cloud.database();
Page({
  data: {
    ads: [],
    item: {
      user: {
        avatar: '',
        nickName: '你好',
        summary: 'ggez'
      }
    }
  },
  onLoad: function() {
    db.collection("ads").get({
      success: res => {
        this.setData({
          ads: res.data
        })
      }
    })
    // 云函数 在小程序前端搞不定， openid 需要复杂计算
    // async await 三个数据库的综合查询
    wx.cloud.callFunction({
      name: "getTravelInfo",
      data: {
        count: 5,
        startIndex: 0
      },
      success: res => {
        console.log(res)
      }
    })
  }
})
