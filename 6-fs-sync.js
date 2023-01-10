const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./newFolder/subFolder2/first.txt', 'utf8')
const second = readFileSync('./newFolder/subFolder2/second.txt', 'utf8')

console.log(first);
console.log(second);

writeFileSync(
  './newFolder/subFolder2/mixed.txt',
  `mixed to : ${first}, $`,
  {flag: 'a'}
)