
require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function(req, res){
  const ipaddress = req.ip.split(":").pop();
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  res.send({ipaddress, language, software});
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

const PORT = process.env.PORT || 5000;
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
