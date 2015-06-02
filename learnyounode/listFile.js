var fs = require('fs');
var path = require('path');

module.exports = function (dirname, filter, callback){

  fs.readdir(dirname, function filterFiles(err, list){
    if(err){
      return callback(err);
    }
    list = list.filter(function(file){
      return path.extname(file) === '.' + filter;
    })
    return callback(null, list)
  });
}
