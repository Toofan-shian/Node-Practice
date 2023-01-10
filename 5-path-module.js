let path = require('path')

let txtPath = path.join(__dirname, 'newFolder', 'subFolder', 'text.txt')
console.log(txtPath);

const absolute = path.resolve(__dirname, 'newFolder', 'subFolder', 'text.txt')
console.log(absolute);