var express =require("express");
var app = express();
var request =require("request");

app.set("view.engine");


app.listen(3000, function(req, res){
	console.log("Server is started form post");
});