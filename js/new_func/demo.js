// 宅
function Otaku(name, age){
  this.name = name;
  this.age = age;
  this.habit = 'galgames';
}

Otaku.prototype.strenth = 60;
Otaku.prototype.sayYouName = function() {
  console.log('I am '+ this.name);
}
var person = new Otaku('kevin', '21');
