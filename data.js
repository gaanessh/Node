var sq=require('mysql');
var con=sq.createConnection(
{
	host:"localhost",
	user:"demo",
	password:"1234",
	database:"demo"
});

con.connect(function(err)
{	
	if (err) throw err;
	var sql="select * from test";
	con.query(sql,function(err,result)
	{	
		if (err) throw err;
		console.log(result);
	});
});	
	