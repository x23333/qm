// 命令 ？
// 1. 按键事件
//   不同的按键做不同的操作？
// 2. 不同的player  JSON 
// 接口 Interface 英雄可以替换使用， 解耦

const Ryu = {
  name: 'Ryu',
  attack () {
    console.log(this.name + '攻击');
  },
  defense () {
    console.log(this.name + '防御');
  },
  jump () {
    console.log(this.name + '跳跃');
  },
  crouch () {
    console.log(this.name + '蹲下');
  }
}

const  makeCommand = function(receiver, state) {
  // 命令对象的生成者， 按键对应的操作出来了， 这样就解耦了
  // 目的不是执行函数， 而是找到对应英雄的动作函数， 并返回， 以返回为目的， 而不是执行
  return function() {
    receiver[state]();
  }
}

const commands = {
  "119": "jump",
  "115": "crouch",
  "97": "defense",
  "100": "attack"
}

const commandStack = [];

document.onkeypress = function(ev) {
  var keyCode = ev.keyCode;
  var command = makeCommand(Ryu, commands[keyCode]);
  if(command) {
    commandStack.push(command);   
    command();
  }
}

document.getElementById('backBtn').addEventListener('click', function() {
  // commandStack 操作的历史， makeCommand 返回了命令对象， 
  // const back = document.createElement('div');
  while(command = commandStack.shift()) {
    command();
  }
}, false)
