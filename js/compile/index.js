const html = `
  <view>
    <text>{{username}}</text>
  </view>
`
let reg = /\{\{(.*?)\}\}/gm;
let obj = {
  'username': '唐唐'
};
// 在模板中查找{{key}}  替换成 username 的值

function compile(html){
  // 匹配占位符
  if(reg.test(html)){
    let key = RegExp.$1;
    html = html.replace(reg, obj[key])
    return html;
  }else{
    return false;
  }

}
const compileedHTML = compile(html);
console.log(compileedHTML);
