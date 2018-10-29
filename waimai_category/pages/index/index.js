Page({
  data: {
    category: [
      {
        name: '果味',
        id: 'guowei'
      },
      {
        name: '蔬菜',
        id: 'shucai'
      },
      {
        name: '炒货',
        id: 'chaohuo'
      },
      {
        name: '点心',
        id: 'dianxin'
      },
      {
        name: '粗茶',
        id: 'cucha'
      },
      {
        name: '淡饭',
        id: 'danfan'
      }
    ],
    curIndex: 0,
    detail: [],
    isScroll: false,
    toView: 'guowei',
    Yheight: 0 //scrollview 有toview 功能， 自动跳转到某个子页面
  },
  onReady () {
    // Yheight = wx.getSystemInfo.windowHidth * category.length;
    // console.log(Yheight)
    // console.log(wx.getSystemInfo.windowHeight)

    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      success: (res) => {
        console.log(res);
        this.setData({
          detail: res.data,
          isScroll: true
        })
      }
    })
  },
  switchTab: function(e){
    this.setData({
      curIndex: e.target.dataset.index,
      toView: e.target.dataset.id,
    })
  },
  // s:function(e){
  //   this.setData({
  //     curIndex: Math.cell(offsetY / wx.getSystemInfo.windowHidth)
  //   })
  // }
})
