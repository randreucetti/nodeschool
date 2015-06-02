var http = require('http');
var fs = require('fs');

var filePath = process.argv[3];

var server = http.createServer(function (request, response){
  var readStream = fs.createReadStream(filePath);

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(response);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    response.end(err);
  });

});

server.listen(process.argv[2]);
