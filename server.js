var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile('/Users/pedroprates/Desktop/icas2018/Server/index.html');
});

app.listen(3000, function() {
    console.log("ICAS 2018 listening on port 3000!");
});