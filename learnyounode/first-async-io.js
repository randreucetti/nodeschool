var fs = require('fs');

var buf = fs.readFile(process.argv[2], function doneReading(err, fileContents){
  var fileLine  = fileContents.toString().split('\n');

  console.log(fileLine.length - 1);
});
