var express = require("express");
var app =express();

app.get("/", function(req, res){
	res.send("Home page");
});

app.listen(3000, function(req, res){
	console.log("Server is started form post");
});