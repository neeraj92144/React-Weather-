// Accessed entire express API
var express= require('express');

// Create our app
var app=express();
// to access environment varialbe use (process.env)
const POST= process.env.PORT || 2017;

app.use( function(req,res,next){
  if(req.headers['x-forwarded-proto'] === 'https'){
      res.redirect('http://'+req.hostname+req.url);
  }
  else{
    next();
  }
});

app.use(express.static('public'));

app.listen( POST , function(){
  console.log("My first react Server is running on port : --> "+POST);
});
