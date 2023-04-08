const fs = require("fs");

//creating a new file 
// fs.writeFileSync("3_read.txt", "Hey there! Its from the JavaScript");
// fs.writeFileSync("3_read.txt", "This is overwritten");

// fs.appendFileSync("3_read.txt", " This is appended");

// const buf_data = fs.readFileSync("3_read.txt");
// console.log(buf_data);
// //Output (Buffer data is obtained, hexadec)
// // PS C:\Users\DELL\OneDrive\Desktop\Web Dev\Node> node .\3_coremodules.js
// // <Buffer 54 68 69 73 20 69 73 20 6f 76 65 72 77 72 69 74 74 65 6e 20 54 68 69 73 20 69 73 20 61 70 70 65 6e 64 65 64>              This is the hexadec format of the original msg


// org_data = buf_data.toString();
// console.log(org_data);
// //This is overwritten This is appended

fs.renameSync("3_read.txt", "3_readfile.txt");