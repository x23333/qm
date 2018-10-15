'use strict';

var number = 9;
var isMarried = false;
var xx = 12;
var yourTurn = ['到你了', '弟弟', '我选择死亡'].map(function (task, index) {
  return index + '-' + task;
});

console.log(yourTurn);

// es6 => es5
// const let 转 var
