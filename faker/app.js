var faker = require('faker');

var randomName = faker.name.firstName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

for(var i =0; i<10; i++){
	console.log(faker.name.findName());
}

// app.listen(3000, function(){
// 	console.log("Server is started");
// })