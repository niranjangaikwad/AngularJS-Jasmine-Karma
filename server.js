var express = require('express');
var app = express();
var path = require('path');
//var angular = require("angular");

//tell express that we want to use the public folder for our static assets
app.use(express.static(path.join('./public')));

app.listen('3002', function () {
  console.log('The server is running on http://localhost:3002');
});

