let os = require('os')

console.log(`user Info : ${toString(os.userInfo())}`)

console.log(os.uptime() / 60 / 60)

const currentUser = {
 name: os.type(),
 release: os.release(),
 totalMem: os.totalmem(),
 freeMem: os.freemem(),
}

console.log(currentUser.name);