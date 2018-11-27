function Person() {
  this.names = ['kevin', 'daisy'];
}

function Child() {
  Person.call(this)
}

var c1 = new Child();
c1.names.push('aaa')
console.log(c1.names);

var c2 = new Child();
console.log(c2.names);