//Import ORM
var orm = require('../config/orm.js');
//Create function to be used with database
var burger = {
	selectAll: function(cb) {
	    orm.selectAll('burgers', function(res){
	    	cb(res);
	    });
	},
	//Account for arrays - colName and vals
	insertOne: function(colNames, vals, cb){
		orm.insertOne('burgers', colNames, vals, function(res){
			cb(res);
		});
	},
	updateOne: function(objColVals, condition, cb){
		orm.updateOne('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}
};

//Export model to be used in burgers_controller.js
module.exports = burger;