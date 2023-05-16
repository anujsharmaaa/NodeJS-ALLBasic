const path = require("path");
// console.log(path.dirname('/home/anuj/ANUJ ALL FILE/node-learn/pathModule/path.js'))
// console.log(path.extname('/home/anuj/ANUJ ALL FILE/node-learn/pathModule/path.js'))
// console.log(path.basename('/home/anuj/ANUJ ALL FILE/node-learn/pathModule/path.js'))
const myPath = (path.parse('/home/anuj/ANUJ ALL FILE/node-learn/pathModule/path.js'))
console.log(myPath.root)

