var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var add = url.parse("http://localhost:8080/abc.html", true);
    res.write(add.host);
    //res.write(add.port);
    res.write(add.pathname);
    res.end();
});
server.listen(9999);
console.log('server started');