var http = require('http'),
  fs = require('fs'),
  url = require('url'),
  port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function (request, response) {
  var parsedUrl = url.parse(request.url);

	if (request.method === "GET" && parsedUrl.pathname === "/listings") {
    //Send listingData in the JSON format as a respone if a GET is sent to the '/listings' path.
		response.statusCode = 200;
		response.write(listingData);
	} else {
		response.statusCode = 404;
		response.write('Bad gateway error');
	}
		response.end();
};

fs.readFile('listings.json', 'utf8', function (err, data) {

	listingData = data;
	// REFERENCING simpleServer.js
	//Creates the Server
	server = http.createServer(requestHandler);
	//Starts the Server
	server.listen(port, function () {
		console.log('server listening on: http://localhost:' + port);
	});
});

