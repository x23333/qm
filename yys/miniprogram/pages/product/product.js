wx.cloud.init({
})
const db = wx.cloud.database();

Page({
  data: {
    name: '',
    product: {}
  },
  onLoad (options) {
    let name = options.title;
    console.log(name)
    wx.setNavigationBarTitle({
      title: '商品详情'
    });

    db.collection("product")
      .where({
        name: name
      })
      .get({
        success: res => {
          console.log(res.data[0]);
          this.setData({
            product: res.data[0]

          })
        }
      })
  },


})