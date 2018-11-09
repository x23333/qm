// var fs = require('fs');
// var data;

// console.log(data);
// try {
//     data = fs.readFileSync('./a.txt','utf8');
// } catch(err){
//     console.error('读取文件出错！' + err.message);
// }
// var fs = require('fs');

// function b() {
//     fs.readFile('./b.txt', 'utf8', function(err, data){
//         console.log(data)
//     })
// }
// try {
//     fs.readFile('./a.txt','utf8', function(err, data){
//         console.log(data);
//         b();
//     });
// } catch(err){
//     console.error('读取文件出错！' + err.message);
// }
// var fs = require('fs');

// try{
//     const dataA = fs.readFileSync('./a.txt','utf8');
//     const dataB = fs.readFileSync('./b.txt','utf8');
//     const dataC = fs.readFileSync('./c.txt','utf8');
//     console.log(dataA, dataB, dataC)
// }catch(e){
//     console.log(e)
// }
var fs = require('fs');
try {
    const fileAPromise = new Promise((reslove, reject) => {
        fs.readFile('./a.txt','utf8', function(err, data){
            if(err) {
                reject(err)
            }else{
               reslove(data) 
            }
            
        })
    });
    const fileBPromise = new Promise((reslove, reject) => {
        fs.readFile('./b.txt','utf8', function(err, data){
            if(err) {
                reject(err)
            }else{
               reslove(data) 
            }
            
        })
    });
    const fileCPromise = new Promise((reslove, reject) => {
        fs.readFile('./c.txt','utf8', function(err, data){
            if(err) {
                reject(err)
            }else{
               reslove(data) 
            }
            
        })
    });
    // Promise.all([fileAPromise, fileAPromise, fileAPromise])
// fileAPromise
//     .then(data => {
//         console.log(data);
//         return fileBPromise
//     })
//     .then(data => {
//         console.log(data);
//         return fileCPromise
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

}catch(e) {
console.log(e)
}