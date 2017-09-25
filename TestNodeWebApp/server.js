'use strict';


// Constants
const PORT = 8080;
const ADMIN_PORT = 8081;
const SUPER_USER_PORT = 8082;

var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

//CREATE APP
const app = express();
app.use(express.static('css'));
app.use(express.static('scripts'));
app.use(bodyParser.json());


//LOCATION OF STATIC CONTENT IN YOUR FILESYSTEM
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT);
console.log('Running on ' + PORT);

// Admin App
const adminApp = express();
adminApp.get('/', function (req, res) {
  res.send('Hello world! I am the admin app\n');
});

adminApp.listen(ADMIN_PORT);
console.log('Running on ' + ADMIN_PORT);

// Super User App
const superUserApp = express();
superUserApp.get('/', function (req, res) {
  res.send('Hello world! I am the super user app\n');
});

superUserApp.listen(SUPER_USER_PORT);
console.log('Running on ' + SUPER_USER_PORT);
