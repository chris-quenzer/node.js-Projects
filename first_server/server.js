/**
 * Created by Chris Q on 4/3/2017.
 */

var http = require('http');
var fs = require('fs');

//404 response
function send404(response){
    response.writeHead(404, {"Context-Type": "test/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

//Handle user request
function onRequest(request, response){

    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200, {"Context-Type": "test/plain"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else{
        send404(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running....");