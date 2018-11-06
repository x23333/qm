- 前端数据库

- 数据保存
  1. localStorage 小的 (json) 结构简单的数据 复杂 结合 JSON.stringify()
    JSON.parse() 2-6M 间
    如 储存 中奖次数和奖品， 可以不用麻烦后端
  2. cookie document.cookie="username=John Doe"; 创建一个cookie
    cookie 就是一个字符串， key=val；
    key2=cal2 非常重要的信息， 并且在每次http请求时都会带上

- indexDB
  让前端释放野心的数据库 前端的mongdb 
  1. request db = 
    window.indexedDB().open(dbname, dbversion (版本))  打开数据库
  2. 异步的
    onsuccess 回调 开始数据业务
    onupgradeneeded 更新数据库
    db.createObjectStore()
    db.createObjectStore.createIndex('email', 'email', { unique: true }) 索引 unique: true 表示唯一 同主键
  3. 事务 transaction 让数据存储更安全
    add request onsuccess 