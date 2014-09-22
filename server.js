var express = require('express');
var faker = require('faker');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/random-user', function (req, res) {
  var user = faker.Helpers.userCard();
  user.avatar = faker.Image.avatar();
  res.json(user);
});

app.listen(3000, function () {
  console.log('App listening on localhost:3000');
});