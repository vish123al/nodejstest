'use strict';

const express = require('express');
const path = require("path");

// Constants
const PORT = 8080;
const ADMIN_PORT = 8081;
const SUPER_USER_PORT = 8082;

// App
const app = express();
app.use(express.static('css'));
app.use(express.static('scripts'));
app.use(bodyParser.json());
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/Home.html'));
});
app.post('/', function (req, res) {

    var calculation = req.body.data;
    var response = new Object();
    try {
        response.result =  eval(calculation);
        response.success = true;
    }
    catch (err) {
        response.result = err.message;
        response.success = false;
    }
    res.send(JSON.stringify(response));

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
