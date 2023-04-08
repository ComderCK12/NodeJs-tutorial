const { json } = require("express");

const bioData = {
    name : 'chirag',
    age : 20,
    college : 'VJTI',
};

// console.log(bioData.age);
// console.log(bioData.name);
// console.log(bioData.college);

const jsonData = JSON.stringify(bioData);

console.log(jsonData);
// {"name":"chirag","age":20,"college":"VJTI"}

// console.log(jsonData.name);      This method does not work


const objData = JSON.parse(jsonData);

console.log(objData);
// { name: 'chirag', age: 20, college: 'VJTI' }

console.log(objData.name);          // This method works