var express =require("express");
var app = express();
var request =require("request");

app.set("view engine", "ejs");


app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=in&apikey=thewdb", function(error, response, body){
    	if(!error && response.statusCode ===  200){
    		var results =JSON.parse(body);
    		// res.render("results.ejs");
    		res.send(results["Search"][0]);
    	}
    });
});

app.listen(3000, function(req, res){
	console.log("Server is started from movie app");
});