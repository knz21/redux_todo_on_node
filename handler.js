var fs = require('fs');
var contentType = {
    html: 'text/html',
    js: 'text/javascript',
    css: 'text/css'
};

exports.readFile = function (req, res) {
    var fileName = req.url;
    if (!fileName || fileName === '/') {
        fileName = '/index.html';
    }
    fs.readFile(__dirname + fileName, 'utf-8', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
            res.write('404 Not Found');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': getContentType(fileName) });
            res.write(data);
            res.end();
        }
    });
};

function getContentType(url) {
    var suffix = url.substr(url.lastIndexOf('.') + 1);
    return contentType[suffix] || 'text/plain';
}