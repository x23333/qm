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
    // console.log(options);
    let lei = options.base;
    // console.log(lei)
    wx.setNavigationBarTitle({
      title: options.title
    });
    db.collection("productlist")
      .where({
        lei: lei
      })
      .get({
        success: res => {
          // console.log(res)
          this.setData({
            list: res.data
          })
        }
      })

  },

})