const app = getApp();
const globalData = app.globalData;


Page({
  data: {
    auth: -1
  },
  onLoad(options) {
    // 高阶函数
    // 用户之前就同意了 若还未同意 执行 fail
    this.getScope(this.getUserInfo, () => {
      this.setData({
        auth: 0
      })
    });
    let openid = wx.getStorageSync('openid');
    if (openid) {

    }else {
      this.getUserOpenId(() => {

      }, () => {
        this.setData({
          // 再登录一次
          auth: 0
        })
      });
    }
  },
  getUserInfo() {
    // console.log(data);
    // 未授权 点击按钮的 data里应该有userinfo
    // 已授权 之前授权的 globalData
    if(!globalData || !globalData.avatarUrl){
      wx.getUserInfo({
        success: (res) => {
          console.log(res)
          this.setData({
            nickname: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl
          })
          globalData.nickName = res.nickName
          globalData.avatarUrl = res.avatarUrl
          
        }
      })
    }
  },
  // 获取用户许可范围 得到一个范围 就可以使用这些东西来做事 
  // success function fail function  不传值 默认函数scope.userInfo
  getScope(success, fail, name='scope.userInfo') {
    wx.getSetting({
      success: (res) => {
        console.log(res)
        if(res.authSetting[name]) {
          // 用户允许获取基本信息
          typeof success === 'function' && success();
        }
        else {
          typeof fail === 'function' && fail();
        }
      }
    })
  },
  getUserOpenId(success, fail){
    // console.log('getUserOpenId');
    wx.login({
      success: (res) => {
        console.log(res);
        wx.cloud.callFunction({
          name: 'jscode2session',
          data: {
            code: res.code
          },
          success: (res) => {
            console.log(res);
            let { openid='', session=''} = res.result;
            wx.setStorage({
              key: 'openid',
              data: res.openid
            })
          }
        })
        
        // jscode2session(res.code)
        //   .then(res => {
        //     console.log(res)
        //   })
      }
    })
  }

})