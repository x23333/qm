// const game = new Phaser.Game();
// Phaser 命名空间  JSON Object
const Phaser = {};
Phaser.Game = function(w,h,type,ele,options){
    console.log('构造函数');
    this.width = w;
    this.height = h;
}//游戏类的构造函数(PS:一个函数被new运行就是构造函数)

let zombiegame = new Phaser.Game(800, 600);//这里新建一个zombiegame 并实例化
console.log(zombiegame.width,zombiegame.height);
