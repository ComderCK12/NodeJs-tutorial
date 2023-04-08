const os = require('os');

console.log(os.arch())

const freeMemory = os.freemem()
console.log(freeMemory);            //Gives value in bytes

// To obtain in GB and get values use ``, $ and {}
console.log(`${freeMemory/1024/1024/1024} GB`)


const totalMemory = os.totalmem()
console.log(`${totalMemory/1024/1024/1024} GB`)
//Can also be obtained by ctrl+shift+esc

console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.type())