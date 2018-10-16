// var str = 'Visit Microsoft';
// console.log(str.replace('Microsoft','alibaba'));
// var money = 'as$dsa$asd$asd';
// console.log(money.replace(/\$/g, '￥'));
let html = `adc{{username}}sadaasd{{aas}}`;
let reg = /\{\{(.*?)\}\}/gm;
console.log(html.match(reg));