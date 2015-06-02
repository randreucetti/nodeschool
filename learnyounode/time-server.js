var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket){
  var currentTime = new Date();
  socket.end(strftime('%F %H:%M', currentTime));
});

server.listen(Number(process.argv[2]));
