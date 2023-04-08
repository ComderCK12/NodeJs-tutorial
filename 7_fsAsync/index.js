const fs = require('fs');


// 1)
// fs.writeFile('read.txt', 'This is async tutorial', (err) => {
//     console.log("File created !");
//     console.log(err);                   //null signifies no error
// });  

// In Node.js, a callback function is a function that is passed as an argument to another function, which is then invoked when the first function has finished executing. A callback function is a way to achieve asynchronous behavior in Node.js. In the context of Node.js, a callback function is typically used to handle the completion of a task that may take some time to complete, such as reading from a file or making a network request. When the task is complete, the callback function is called with the results of the task. Eg. http is asynchronous and https is synchronous 


// 2)
// fs.appendFile('read.txt', ' And I am doing awesome !', (err) => {
//     console.log('Task successfull');
// });

// 3)
fs.readFile('read.txt', 'utf-8', (err, res) => {
    console.log(res);
});