var http = require('http');
var fs = require('fs')
var serv = http.createServer(function (req, res) {
    fs.readFile('temp.txt', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('hello world' + '<br>');
        res.write(data);
        res.end();
    });
});
serv.listen(9999);
console.log('server started');
