//index.js
//获取应用实例
const app = getApp();

Page ({
  // 数据
  data :{
    slides: [],
    entities: []
  },
  onLoad() {
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    })
    console.log('首页加载');
  },
  testDrive(){
    console.log("do do doooo~~")
  },
  readMore(event){
    wx.navigateTo({
      url: `pages/vehicles/show?id=${event.target.dataset.id}`
    })
  }
})