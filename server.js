var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  if ((request.method == 'GET')&& (parsedUrl.path == '/listings')) { //send listingData in JSON if GET request is sent to '/listings'. 
    response.writeHead(200, { 'Content-Type' : 'application/json'});
    response.write(listingData); // send listingData
    response.end(); 
  }
  else { //Otherwise, it should send a 404 error. 
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Bad gateway error');
    response.end();
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  server = http.createServer(requestHandler).listen(port);
  listingData = data;
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});
