var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	
	MongoClient.connect(url, function(err, db) {
		if(err) throw err;
		var dbo = db.db("mtg");
		dbo.collection("TimeSpiral").findOne({}, function(err, result){
			if(err) throw err;			
			console.log(result);
			db.close();
		});
	});	
	res.send('respond with a resource!!!');
});

module.exports = router;
