function Person(name) {
  this.name = name;
}
let p = new Person('刘醒')
  console.log(typeof Person); // function
  console.log(typeof p); // object
  console.log(Person.prototype); 
  console.log(p.prototype); 
