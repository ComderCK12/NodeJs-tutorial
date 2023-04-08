const fs = require("fs");

// 1) 
fs.mkdir('ck', (err) => {
    console.log('Folder created !');
});


// 2)
// fs.writeFile('./ck/bio.txt', 'hello world this is me', (err) => {
//     console.log('File created !');
// });


// 3)
// fs.appendFile('./ck/bio.txt', ' I HAVE APPENDED THIS LINE', (err) => {
//     console.log('Data appended successfully !');
// });


// 4) 
// To store the data, 'data' is passed as the parameter

// fs.readFile('./ck/bio.txt', 'utf-8', (err, data) => {
//     console.log(data);
//     console.log(err);
// });


// 5)
// fs.rename('./ck/bio.txt', './ck/mybio.txt', (err) => {
//     console.log('Rename successfull !');
// });


// 6)
// fs.unlink('./ck/mybio.txt', (err) => {
//     console.log('File deleted !');
// });


// 7)
// fs.rmdir('./ck', (err) => {
//     console.log('Folder Deleted !');
// })