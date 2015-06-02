var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response){

    if(request.method != 'GET') {
        return res.end('GET please');
    }
    var urlInfo = url.parse(request.url, true);

    var query = urlInfo.query;
    var queryTime = new Date(query.iso);


    var jsonTime;
    if(urlInfo.pathname == '/api/parsetime'){
      jsonTime = {hour: queryTime.getHours(), minute: queryTime.getMinutes(), second: queryTime.getSeconds()}
    } else if(urlInfo.pathname == '/api/unixtime'){
      jsonTime = {unixtime: queryTime.getTime()}
    }
    if(jsonTime){
      response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(jsonTime));
    }

});

server.listen(process.argv[2]);
