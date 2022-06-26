let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/userGet", function(request, response){
	console.log(request.query);
	response.send("You have successfully used Get method : "+ JSON.stringify(request.query));
});

server.post("/userPost", function(request, response){
	console.log(request.body);
	response.send("You have successfully used Post method : "+ JSON.stringify(request.body));
	
	userData.userName = $('div#wrap form #name').val() + '.ValidatedByGET';
		userData.userSurname = $('div#wrap form input#surname').val() + '.ValidatedByGET';
		userData.userAge = $('div#wrap form input#age').val() + '.ValidatedByGET';
		userData.userLocation = $('div#wrap form input#location').val() + '.ValidatedByGET';
	
});

server.listen(3000);