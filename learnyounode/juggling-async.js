var http = require('http');
var bl = require('bl');

var results = new Array();
var count = 0; //keeps track of number of respones received

function httpGet(index){
  http.get(process.argv[2 + index],  function (response){
    response.pipe(bl(function(err, data){
      if(err){
        return console.error(err);
      }
      data = data.toString();
      results[index] = data;
      count++;
      if(count == 3){
        for(var i = 0; i < results.length; i++){
          console.log(results[i]);
        }
      }
    }));
  })
}

for(var i = 0; i < 3; i++){
  httpGet(i)
}
