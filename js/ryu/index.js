// 命令？
// 1. 按键事件(发送命令)
//     不同按键 不同的事件
// 2. 不同的player JSON (接受命令)

const Ryu = {
  name: 'Ryu',
  attack() {
    console.log('A了一下')
  },
  defense () {
    console.log('怂了一下')
  },
  jump () {
    console.log('跳跃')
  },
  crouch () {
    console.log('蹲下')
  }
}

const makeCommand = function(receiver, state) {
  // 命令对象的生成者
  return 
}

const commands = {
  "119": "jump",
  "115": "crouch",
  "97": "defense",
  "100": "attack"
}
document.onkeypress = function (ev) {
  var keyCode = ev.keyCode;
  var command = makeCommand(Ryu, commands[keyCode])
}