var http=require('http');
var dt=require('./export');
var serv=http.createServer(function(req,res)
{
res.write('hello world' + dt.md());
res.end();
});
serv.listen(9999);
console.log('server started');
