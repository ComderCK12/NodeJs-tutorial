const path = require('path');

// console.log(path.dirname('C:/Users/DELL/OneDrive/Desktop/Web Dev/Node/11_path_Module/path.js'))
// console.log(path.extname('C:/Users/DELL/OneDrive/Desktop/Web Dev/Node/11_path_Module/path.js'))
// console.log(path.basename('C:/Users/DELL/OneDrive/Desktop/Web Dev/Node/11_path_Module/path.js'))

console.log(path.parse('C:/Users/DELL/OneDrive/Desktop/Web Dev/Node/11_path_Module/path.js'))

const myPath = path.parse('C:/Users/DELL/OneDrive/Desktop/Web Dev/Node/11_path_Module/path.js')
console.log(myPath.name)
console.log(myPath.ext)
