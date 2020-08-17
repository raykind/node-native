const os = require('os')

console.log('OS: ', os.platform())

console.log('Processor architecture: ', os.arch())

console.log('Processor detailed info: ', os.cpus())

console.log('Available memory: ', os.freemem())

console.log('Total memory: ', os.totalmem())

console.log('Root directory: ', os.homedir())

console.log('Turn-on time(sec): ', os.uptime())
