var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	
  var cons = require("consolidate");
  app.engine("swig", cons.swig)

	console.log("Travel application is running!");

	var myName = "YOUR_NAME_HERE";
	app.get("/", function (req, res) {
    db.findArray ({}, function(results) {
      res.render("index.swig", { locations: results});
	});
    
 });
  
  app.get("/rating/:rating", function (req,res) {
    db.findArray({ rating: parseInt(req.params.rating) }, function(results) {
      res.render("index.swig", { locations: results});
    })
    
  })
  
  app.get("/icecream/:flavor/:topping?", function(req,res) {
    res.render("icecream.swig", {
      flavor: req.params.flavor, 
      topping: req.params.topping
    })
  });

})