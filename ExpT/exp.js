/**
 * Created by dmadmin on 9/3/2015.
 */

var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');


var app=express();

//configure app

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//use middleware

app.use(bodyParser());      //use it as funct it returns the obj of body-parser
app.use(express.static(path.join(__dirname,'node_modules')));

//define routes

// app.use(require('todo')); //It should be directly inside node-module wch is static

app.use(require('./todo'));

//create server
app.listen(1337,function(){

    console.log("Ready on port 1337");
});
