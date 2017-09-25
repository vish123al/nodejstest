'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const ADMIN_PORT = 8081;
const SUPER_USER_PORT = 8082;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world! I am the regular app\n');
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
