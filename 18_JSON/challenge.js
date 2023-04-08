// 1) convert to JSON
// 2) Add it in a separate File
// 3) Read File
// 4) Convert back to JSON Object
// 5) Show on console

const fs = require('fs');

const bioData = {
    name : 'chirag',
    age : 20,
    college : 'VJTI',
};


// 1) 
const jsonData = JSON.stringify(bioData);

// 2)
fs.writeFile('json1.json',jsonData, (err) => {
    console.log(err);
});

// 3) 
fs.readFile('json1.json', 'utf-8', (err, data) => {
    console.log(data);
    const objData = JSON.parse(data);
    console.log(objData);
})



