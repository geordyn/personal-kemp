var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../public'));

app.listen(8081, function(){
  console.log('akemp.co on port 8081');
});
