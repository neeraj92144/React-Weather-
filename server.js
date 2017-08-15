// Accessed entire express API
var express= require('express');

// Create our app
var app=express();
// to access environment varialbe use (process.env)
const POST= process.env.PORT || 2017;

app.use( (req,res,next)=>{
  console.log('PROTOCOL--->',req.headers['x-forwarded-proto'] );
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else{
    res.redirect('http://'+req.hostname+req.url);
  }
});

app.use(express.static('public'));

app.listen( POST , function(){
  console.log("My first react Server is running on port : --> "+ POST);
});
