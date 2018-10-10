// 'use strict';

var Book = function (isbn, title, author) {
    //构造函数 constructor
    console.log(this);
    // if(isbn === undefined){
    //     throw new Error('Book constructor requires an isbn')
    // }
    // if(!this.checkIsbn(isbn))
    //     throw new Error('Book constructor requires an isbn');
    this.isbn = isbn;
    this.title = title  || 'No title Specified';
    this.author = author || 'No author Specified';
}
Book.prototype = {
    
    checkIsbn: function(isbn) {
        // 只能为10 或 13 位
        if(isbn.length != 10 && isbn.length != 13){
            return false;
        }
        // 第4位必须为'-'
        if(!isbn.indexOf('-') == 3){
            return false;
        }
        // 必须存在 且是string
        if(isbn === undefined || typeof isbn !== 'string'){
            return false;
        }
        return true;
    },
    getIsbn: function(){
        return this.isbn;
    },
    setIsbn: function(){
        // isbn 不能被随意设置
        console.log('您当前没有权限');
    },
    getTitle: function(){
        return this.title;
    },
    setTitle:function(){

    },
    getAuthor:function(){
        return this.author;
    },
    setAuthor:function(){

    }
    
}
// 函数的执行方式，决定this的指向
// 1. 作为普通函数 this 指向全局，浏览器端指向window node 后端 global 
// 当启用严格模式后， undefined


// 是函数 但也能被实例化成对象
let book = new Book('123-123456','','asd');

// 判断某个对象是不是属于这个类
console.log(book instanceof Book);
console.log(book.author)
// book.setTitle('');
// book.setAuthor('');