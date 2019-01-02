//引入path
var path = require('path');
//dirname
console.log(path.dirname('C:\\www.shop.com\\application'));//返回路径

console.log(path.extname('3.txt'));//返回后缀
console.log(path.extname('C:\\www.shop.com\\application\\admin.html'));

console.log(path.join('dir1','dir2','cone'));//拼接后缀

console.log(__dirname);//返回当前执行文件所在的目录
console.log(__filename);//返回当前执行文件所在的完整路径

