var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(valOfCol, valOfOtherCol, cb) {
		orm.insertOne("burgers", valOfCol, valOfOtherCol, function(res) {
			cb(res);
		});
	},
	updateOne: function(columnInput, condition, cb) {
		orm.updateOne("burgers", columnInput, condition, function(res) {
			cb(res);
		});
	},
	delete: function(burgerId, cb) {
		orm.delete("burgers". burgerId, function(res){
			cb(res);
		});
	}
};

module.exports = burger;
