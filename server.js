var express = require('express');

//Create app

var app = express();

app.use(express.static('public'));

app.listen(5500, function() {
    console.log('Express server is up on port 5500');
});