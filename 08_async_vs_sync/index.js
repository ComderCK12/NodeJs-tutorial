const fs = require('fs');

// 1)
// const data = fs.writeFileSync("read_sync.txt", "utf-8");
// console.log(data);
// console.log("After the data");


// 2)
fs.readFile("read_async.txt", "utf-8", (err) => {
    console.log("Hello");
});
console.log("After async data");