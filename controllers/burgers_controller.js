var express = require('express');

var router = express.Router();

//Import function model
var burger = require('../models/burger.js');

//Create the app routes
router.get('/', function(req, res){
	burger.selectAll(function(data){
		var allBurgsObj = {
			burgers: data
		};
		console.log('allBurgsObj: ', allBurgsObj);
		res.render('index', allBurgsObj);
	});
});

router.post('/', function(req, res){
	//Insert multiple vals into multiple columns with arrays
	burger.insertOne([
		'burger_name', 'devoured'
	], [
	req.body.burger_name, false
	], function(){
		//Redirect to root directory
		res.redirect('/');
	});
});

router.put('/:id', function(req, res){
	//Set MySQL update condition to the burger id
	var condition = 'id = ' + req.params.id;

	console.log('condition: ', condition);

	burger.updateOne({
		devoured: true
	}, condition, function(){
		res.redirect('/');
	});
});

// Export routes for server.js to use.
module.exports = router;