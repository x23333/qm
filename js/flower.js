// 男主角 
// json object 对象字面量 
// 描述着，对象就出来了
var xiaoming = {
    name: '小明',
    sex: '男',
    single: true,
    classroom: '161',
    hometown: '赣州',
    sendFlower:function(target){
        target.receiveFlower(this);
    }
  };
  
  // js 动态语言， 很简单， 随意, 表现力
  
  var xiaohong = {
    name: '小红',
    sex: '女',
    single: true,
    classroom:'161',
    receiveFlower: function(){
        // if(sender.name == '小明'){
        //     console.log('鲜花很漂亮，月色真美！');
        // }else{
        //     console.log('哦');
        // }
        console.log('收到鲜花');
    },
    listenGoodMod:function(){
        setTimeout(()=>{
            this.receiveFlower();
        },10000);
    }
  };

  var xiaoli={
      name:'小丽',
      sex:'女',
      single:true,
      hometown:'赣州',
      sendFlower:function(target){
        target.receiveFlower();
    },
    receiveFlower: function(sender){
        // if(sender.name !='小明'){
        //     console.log('丨');
        // }else{
        //     console.log('太太我喜欢你啊！');
        // }
        // xiaohong.receiveFlower(sender);
        xiaohong.listenGoodMod();
    }
  };
  

  console.log(xiaoming.name);
  xiaoming.sendFlower(xiaoli);