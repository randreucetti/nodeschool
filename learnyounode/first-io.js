var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var fileLine  = buf.toString().split('\n');

console.log(fileLine.length - 1);
