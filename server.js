var express = require ('express');
var woah = require('../routers/woah');
var state = require('../routers/state');

var app = express();

app.use('/', woah);
app.use('/', state);

app.listen(1337, function () {
  console.log('wrecked listening on port 1337');
};
