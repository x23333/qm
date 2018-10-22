App({
  onLaunch(){
    console.log('开始加载');
    wx.request({
      url:'https://www.easy-mock.com/mock/5bca925ce6742c1bf8220bee/ikcamp/video',
      success: (response) => {
        // const{slides, vehicles,stories} = response.data;
        // console.log(slides, vehicles,stories);
        // this.globalData.slides = slides
        // this.globalData.vehicles = vehicles
        // this.globalData.stories = stories
        // let a = {};
        Object.assign(this.globalData, response.data,{
          'faker': 'god'
        });
        console.log(this.globalData);

      }
    })
  },
  // // 全局的数据 App.js 是全局的， 如用户的登录状态
  globalData: {
    
  }
})