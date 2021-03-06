import  { loadImage } from "./assetUtil"; 
// egret Main 类 
class Main extends egret.DisplayObjectContainer {
  constructor () {
    super(); 
    // 如果子类要有自己的构造函数代码， 选运行父类构造函数
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }
  onAddToStage (event) {
    // let textField = new egret.TextField();
    // this.addChild(textField);
    // textField.textColor = 0xff0000;
    // textField.text = "您好";
    this.createGame();
  }
  async createGame() {
    // 加载资源
    // Promise.All 并行执行  
    const assets = [
      'assets/background.png',
      'assets/hero.png',
      'assets/enemy.png'
    ];
    // loadImage 返回的一定是 Promise 实例 因为 await
    // assets => Promise[] 
    const bitmaps = await loadImage(assets) as egret.Bitmap[];
    const [bg, hero, enemy] = bitmaps;
    
    // 创建bg hero enemy 等位图 在页面上
    this.addChild(bg);
    this.addChild(hero);
    this.addChild(enemy);

    this.centerAnchor(hero);
    this.centerAnchor(enemy);

    // enemy 位置
    enemy.x = this.stage.stageWidth / 2;
    enemy.y = 200;

    // hero 位置
    hero.x = this.stage.stageWidth / 2;
    hero.y = this.stage.stageHeight - 100;
  }
  centerAnchor(displayObject: egret.DisplayObject) {
    displayObject.anchorOffsetX = displayObject.width / 2;
    displayObject.anchorOffsetY = displayObject.height / 2;
  }
}



window['Main'] = Main;
egret.runEgret();