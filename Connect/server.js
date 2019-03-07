/**
 * Created by dmadmin on 8/30/2015.
 */

var connect=require('connect');
var http=require('http');

var app=connect(); //It is used to handle request and response obj

/*
// Handles the request by the user
function doFirst(request,response,next){
    console.log("Inside doFirst()...");
    next();    // It moves the stack to next object i.e doSecond obj
}
function doSecond(request,response,next){
    console.log("Inside doSecond()...");
    next();
}
app.use(doFirst);
app.use(doSecond);
*/

function profile(request,response){
    console.log("User requested profile");
}
function forum(request,response){
    console.log("User requested forum");
}
app.use('/profile',profile);  //profile is our another page in our website
app.use('/forum',forum);


http.createServer(app).listen(8888);
console.log("Server is running...");
