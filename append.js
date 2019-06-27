var http = require('http');
var fs = require('fs')
var serv = http.createServer(function (req, res) {
    fs.unlink('append.text', function (err) {
        if (err) throw err;
    });
    fs.readFile('temp.txt', function (err, data) {

        fs.appendFile('append.text', data, function (err) {
            if (err) throw err;
            res.write('data saved');
            res.end();
        });
        if (err) throw err;
    });
});
serv.listen(9999);
console.log('server started');
