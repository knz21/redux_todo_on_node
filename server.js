var http = require('http');
var url = require('url');
var settings = require('./settings');
var handler = require('./handler');

process.on('uncaughtException', function(err) {
    console.log('error!!!!!');
    console.log(err);
});
http.createServer(handler.readFile).listen(settings.port);
console.log('server. port:' + settings.port);