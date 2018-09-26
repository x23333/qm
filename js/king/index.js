const chior = []; //乐队

// 只要嘎嘎叫的

var duck = {
    duckSing:function(){
        console.log('嘎嘎嘎~');
    }
}

var chicken = {
    chickSing:function(){
        console.log('咯咯咯~');
    },
    duckSing:function(){
        console.log('嘎嘎嘎~'); 
    }
}

// 如果它走起来像鸭子，叫起来也像鸭子，所以它就是鸭子


/*
*功能：加入合唱团
*params: animal 动物对象
*chior 加入新成员
*/
function joinChior(animal){
    if(animal && typeof animal.duckSing === 'function'){
        chior.push(animal);
        
    }
}
for(var i = 1;i < 1000;i++){
    joinChior(duck);
}

console.log(chior.length);

joinChior(chicken);

console.log(chior.length);
