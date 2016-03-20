var express = require('express');
var app = express();
var motivations=require('motivations');

app.get('/', function(request,response){
    response.send(motivations[6]);
});
module.exports=app;




