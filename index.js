var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello  World!');
  console.log("log test");
});

app.post('/', function (req, res) {
  console.log("Hello modemcu");
  console.log(req.body);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
