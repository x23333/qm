// 立即执行函数
(function() {
  const IndexDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexDB || window.OIndexedDB || window.msIndexedDB,
  IDBTransation = window.IDBTransation || window.webkitIDBTransation || window.mozIDBTransation || window.OIDBTransation || window.msIDBTransation,
  dbVersion = 2.0;

  let db;
  let request = indexedDB.open("elephantFiles", dbVersion);
  const createObjectStore = function(dataBase) {
    dataBase.createObjectStore("elephants")
  }
  const putElephantInDB = function(blob) {
    // console.log('asd')
    const readWriteMode = typeof
    IDBTransaction.READ_WRITE  == 'undefined' ? 'readwrite': IDBTransaction.READ_WRITE;
    // 事务
    const transaction = db.transaction(["elephants"], readWriteMode)
    transaction.objectStore("elephants").add(blob, "image");
    transaction
      .objectStore("elephants")
      .get("image")
      .onsuccess = function (event) {
        // console.log('asd')
        const imgFile = event.target.result;
        // blob 文件 img src url 本地， blob:// 找到window.URL 将二进制文件变为地址
        const URL = window.URL || window.webkitURL;
        const imgURL = URL.createObjectURL(imgFile)
        console.log(imgURL);
        document.getElementById('elephant').src = imgURL;
        document.getElementById('elephant').onload = function() {
          window.URL.revokeObjectURL(this.src);
        }
      }
  }
  const getImageFile = () => {
    // 图片 在根目录， 先存图进 数据库
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'elephant.png', true);
    xhr.responseType = 'blob'; // 内容格式  较多 text/json  text  text/html blob--二进制格式的
    xhr.send();

    xhr.addEventListener('load', function(){
      if(xhr.status == 200){
        blob = xhr.response;
        console.log(blob)
        putElephantInDB(blob)
      }
    },false);
  }
  request.onerror = function (event) {
    console.log('error createing/assessing IndexedDB database');
  }
  request.onsuccess = function() {
    db = request.result;  
    // console.log(db)
    // db.onerror = function(event) {
    //   console.log('error')
    // }
    getImageFile();
  }
  request.onupgradeneeded = function(event) {
    console.log(event.target.result);
    createObjectStore(event.target.result)
  }
})()