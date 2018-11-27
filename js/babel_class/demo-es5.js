'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name, sex, age) {
    _classCallCheck(this, Person);

    this.name = name, this.age = age, this.sex = sex;
  }

  _createClass(Person, [{
    key: 'sayHello',
    value: function sayHello() {
      return 'I am ' + this.name + ', ' + this.age + ' years old';
    }
  }]);

  return Person;
}();

var ywj = new Person('游文举', '', '21');

console.log(ywj.sayHello());
