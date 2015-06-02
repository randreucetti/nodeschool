var listFile = require('./listFile');

var dir = process.argv[2];
var ext = process.argv[3];

listFile(dir, ext, function(err, list){
  if(err){
    throw err;
  } else list.forEach(function(file){
    console.log(file);
  })
})
