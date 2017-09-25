'use strict';

var http = require('http');
var port = process.env.port || 8080;
var fs = require('fs');

var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

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
    res.sendFile(path.join(__dirname + '/home.html'));
    //__dirname : It will resolve to your project folder.
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

console.log('Calculator web application running');

//PORT TO LISTEN TO
app.listen(8080);
