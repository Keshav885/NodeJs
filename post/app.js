var express = require("express");
var app =express();
var bodyParser =require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



var friends =["sam", "ham", "kim", "bil", "chill"];
app.get("/", function(req, res){
	res.send("Home page");
});

app.get("/friends", function(req, res){
	res.render("friends.ejs", {friends:friends});
});

app.post("/addfriend", function(req, res){
    var addnew = req.body.addnew;
    friends.push(addnew);
    res.redirect("/friends");
});
app.listen(3000, function(req, res){
	console.log("Server is started form post");
});