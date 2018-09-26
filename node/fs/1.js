var fs = require('fs');
var data;



console.log(data);
try {
    data = fs.readFileSync('./1fileForRead.txt','utf8');
} catch(err){
    console.error('读取文件出错！' + err.message);
}