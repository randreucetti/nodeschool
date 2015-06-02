var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request, response){

  request.pipe(map(function (chunk){
    if(request.method != 'POST')
        return res.end('POST please');

    return chunk.toString().toUpperCase();
  })).pipe(response);
});

server.listen(process.argv[2]);
