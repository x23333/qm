// require + module.exports js 模块化。 commonJS
// import from    export default   es6 模块化
const cloud = require('wx-server-sdk');
const got = require('got');
cloud.init()

const db = cloud.database();



// 云函数入口函数  async 是函数修饰符， 属于es7，让异步的代码同步化
exports.main = async () => {

  const photoInfos = [];
  const photos = await db.collection('photos').get();
  console.log(photos);
  for(let i = 0; i <photos.data.length; i++){
    const photo = photos.data[i];
    let openid = photos._openid;
    const user = await db.collection('userInfo')
    .where({
      _openid: openid
    }).get();
    if(user.data.length > 0){
      photo.user = user.data[0]
    }
    photoInfos.push(photo);
  }
  return photoInfos;
  // 费时 异步的， 单是想保持执行和阅读的顺序
  // let getResponse = await got('httpbin.org/get');
  // console.log(getResponse)
  // let postResponse = await postMessage('httpbin.org/post',{
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     title: '标题',
  //     value: 1231 
  //   })
  // })
  // console.log(postResponse)
  // // await 让我们的代码等待一下 只有在async 才可以使用
  // return postResponse.body
}