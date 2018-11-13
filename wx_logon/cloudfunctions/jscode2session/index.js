// 云函数入口文件
const cloud = require('wx-server-sdk')
const queryString = require('querystring') 
const request = require('request');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let { code } = event;
  console.log(code);
  let id = 'wx94c1d3c734f2d164';
  let secretKey = 'a47b0a65f34d7abf8416f241c7442495';
  const data = {
    appid: id,
    secret: secretKey,
    js_code: code,
    grant_type: 'authorization_code'
  }
  let url = `https://api.weixin.qq.com/sns/jscode2session?${queryString.stringify}`
  console.log(url);
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if(error || response.statusCode !== 200){
        reject(error)
      }else {
        try {
          console.log(body)
          const r = JSON.parse(body)
          resolve(r)
        }catch(e) {
          reject(e)
        }
      }
    })
  });
  // 在session 前 后端， 操作小程序登录， 当然要小程序同意
}