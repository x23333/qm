const fs = require('fs');
const path = require('path')
// 遍历目录及子目录 把文件输出
function getfilesInDir (dir) {
  var results = [path.resolve(dir)];
  var files = fs.readdirSync(dir, 'utf8');
  console.log(files);
  files.forEach(flie => {
    file = path.resolve(dir, files);
    // 文件的信息
    const stats = fs.statSync(file);
    // console.log(stats)
    if(stats.isFile()) {
      results.push(file);
    }else {
      results = results.concat(getfilesInDir(file))
    }
  })
  return results;
}
const files = getfilesInDir('./src');

console.log(files)
