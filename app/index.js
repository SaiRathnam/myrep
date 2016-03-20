var express = require('express');
var app = express();

app.get('/', function(request,response){
    response.send("Hiii bangalore");
});
module.exports=app;


app.get('/random', function(request,response){
    response.send("Hello");
});
module.exports=app;
