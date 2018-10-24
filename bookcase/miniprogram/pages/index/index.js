//index.js


const app = getApp()
// 云开发的时代，服务器没有实指，动态分配，动态扩容
// 数据库是mongdb database sdk 有get() wehere() update() 
// database -> collection -> doc(json)
const db = wx.cloud.database();
const book = db.collection('myBook');
const _= db.command;
Page({
  data: {
    book_list: []
  },
  onLoad: function() {
    db.collection('myBook').get({
      success: res => {
        setData({
          book_list: res.data
        })
      }
    })
  }
})
