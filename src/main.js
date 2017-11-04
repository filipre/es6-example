var file1 = require("./file1.js");
var file2 = require("./file2.js");
var promises = require("./promises.js");

console.log(file1.square(3));

file2.print();

window.test = {};
window.test.square4 = file1.square(4);
console.log(window.test.square4);

promises.run();
