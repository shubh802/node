
var http=require('http');

function onRequest(request,response){

    //There are two request one fr the url and another one is for the icon

    console.log("A user mage a request: "+request.url);
    response.writeHead(200,{"Context-Type":"text/plain"}); //status code n obj
    response.write("Here is some data"); //data send to user in the browser
    response.end();
}

//callback wht we want whn to run when user tries to connect to server
http.createServer(onRequest).listen(8888); //whnever thy try to connect server has to listen to a port no listening for user to connect
console.log("Server is running");
