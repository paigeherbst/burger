var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		var handlebarsObject = {
			burgers: data
		};
		res.render("index", handlebarsObject);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.insertOne([
		"burger_name"
	], [
		req.body.burger_name
	], function(result) {
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req, res) {
	var burgerId = "id = " + req.params.id;

	console.log("Burger status", burgerId);

	burger.updateOne({
		devoured: 1
	}, burgerId, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
router.delete("/api/burgers/:id", function(req, res){
	var burgerId = "id = " + req.params.id;

	burger.delete(condition, function(result){
		if (result.affectedRows == 0){
			return res.status(404).end();
    } else {
      res.status(200).end();

		}
	})
})
module.exports = router;