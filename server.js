// Accessed entire express API
var express= require('express');

// Create our app
var app=express();
// to access environment varialbe use (process.env)
const POST= process.env.PORT || 2017;

app.use( function(req,res,next){
  // console.log('HTTPS/HTTP',req.headers['x-forwarded-proto']);
  // console.log('HOSTNAMEW',req.hostname)
  // console.log('Url-->',req.url);
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else if(req.headers['x-forwarded-proto'] === undefined){
    console.log('INSide UNdeni');
    next();
  }
  else{
    console.log('else');
    res.redirect('http://'+req.hostname+req.url);
  }
});

app.use(express.static('public'));

app.listen( POST , function(){
  console.log("My first react Server is running on port : --> "+POST);
});
