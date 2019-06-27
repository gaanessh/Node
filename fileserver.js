var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (req, res) {
    var add = url.parse(req.url, true);
    var filename = '.' + add.pathname;
    fs.readFile(filename.toString(), function (err, data) {
        if (err) {
            console.log('exception occurred');
        }
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(data);
        return res.end();
    });

});
server.listen(9999);
console.log('server on');