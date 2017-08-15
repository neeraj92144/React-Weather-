// Accessed entire express API
var express= require('express');

// Create our app
var app=express();

app.use(express.static('public'));

app.listen( 2017, function(){
  console.log("My first react Server is running on port : --> 2017");
});
