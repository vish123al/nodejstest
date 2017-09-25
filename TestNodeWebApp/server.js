


// Constants
var PORT = 8080;
var ADMIN_PORT = 8081;
var SUPER_USER_PORT = 8082;

var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

//CREATE APP
var app = express();
app.use(express.static('css'));
app.use(express.static('scripts'));
app.use(bodyParser.json());


//LOCATION OF STATIC CONTENT IN YOUR FILESYSTEM
app.get('/', function (req, res) {
  res.send('Hello world! I am the regular app\n');
});

app.listen(PORT);
console.log('Running on ' + PORT);







