// miniprogram/pages/photo/photo.js
const db = wx.cloud.database();
const photos = db.collection('photos')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // photos.where().get() 返回的一定是数组
    // 查找一条记录
    photos.doc(options.id).get({
      success: res => {
        this.setData({
          photo: res.data.image,
          id: options.id
        })
      }
    })
  },
  downloadPhoto: function(){
    wx.cloud.downloadFile({
      fileID: this.data.photo,
      success: res => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: res => {
            wx.showToast({
              title: '保存成功'
            });
          },
          fail: err => {
            console.log(err)
          }
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    // return {
    //   title: '',
    //   path: '/pages/photo/photo',
    //   imageUrl: 'https://636f-codingdream-74b4e5-1256758450.tcb.qcloud.la/687434.png',
    //   success: res => {
    //     console.log('转发成功')
    //   },
    //   fail: res => {
    //     console.log('转发失败')
    //   }
    // }
  }
})