// isbn title author


// 立即执行函数
var Book = (function(){
    // 闭包 闭合的空间
    var numberofBooks = 0;
    
    return function(newIsbn,newTitle,newAuthor){
        // 局部作用域的属性
        console.log(newIsbn,newTitle,newAuthor);
        var isbn, title, author;
        this.setIsbn = function(newIsbn){
            if(checkIsbn(newIsbn)){
                isbn = newIsbn;
            }
        }
        this.getIsbn = function(){
            return isbn;
        }
        this.setTitle = function(newTitle){
            title = newTitle || 'No title Specified';
        }
        this.getTitle = function() {
            return title;
        }
        this.setTitle(newTitle);
        numberofBooks++;
        this.getNumberofBooks = function(){
            return numberofBooks;
        }
        console.log(`创建了${numberofBooks}本书！`);
    }
})();
var checkIsbn = function(isbn) {
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
        throw new Error('isbn 有误！')
        return false;
    }
    return true;
}
// 静态方法
Book.convertToTitleCase = function() {
    return inputString.toUpperCase();
}
// 原型链上的方法，公有方法
Book.prototype = {
    display: function(){
        console.log(`这本书名为${this.getTitle()}`)
    }
}
var book = new Book('123','飞鸟集','泰戈尔');
var book2 = new Book('113','dpcq','tctd');
console.log(book.getNumberofBooks());


