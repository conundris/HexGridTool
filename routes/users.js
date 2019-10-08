var express = require('express');
var router = express.Router();
var url = "mongodb://localhost:27017/";

	

/* GET users listing. */
router.get('/', function(req, res, next) {
	var MongoClient = require('mongodb').MongoClient;
		
	MongoClient.connect(url, function(err, db) {
		if(err) throw err;
		var dbo = db.db("dndTest");
		dbo.collection("chult").findOne({}, function(err, result){
			if(err) throw err;			
			console.log(result);
			db.close();
		});
	});	
	//res.send('respond with a resource!!!');
});


router.post('/', function(req, res, next) {
	var MongoClient = require('mongodb').MongoClient;
		
	MongoClient.connect(url, function(err, db) {
		if(err) throw err;
		var dbo = db.db("dndTest");
		dbo.collection("chult").insertOne(req.body, function(err, result){
			if(err) throw err;			
			console.log(result);
			db.close();
		});
	});	
});

module.exports = router;
