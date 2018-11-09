// miniprogram/pages/productList/productList.js
wx.cloud.init({
})
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lei:'',
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let lei = options.base;
    console.log(lei)
    wx.setNavigationBarTitle({
      title: options.title
    });
    db.collection("productlist")
      .where({
        lei: "pat"
      })
      .get({
        success: res => {
          this.setData({
            list: res.data
          })
        }
      })
    // this.setData({
    //   list: db.collection("productlist")
    //   .where({
    //     "lei": "pat"
    //   })    
    // })
    // .get(res => {
    //   console.log(res);
    //   this.setData({
    //     list: res.data
    //   })
    // })
    // .get({
    //   success: res => {
    //     console.log(res);
    //     res.data.where({
    //       lei: "pat"
    //     })
    //     .get(res => {
    //       console.log(res);
    //       this.setData({
    //         list: res.data
    //       })
    //     })
    //   }
    // })
  },
  getData: function(){
    // let li = [];
    // wx.cloud.callFunction({
    //   name: 'getData'
    // }).then(res => {
    //   li = res
    // })
    // console.log(li)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})