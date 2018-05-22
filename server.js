var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var charactersController = require('./controllers/characters');
var picturesController = require('./controllers/pictures');
var feedbackController = require('./controllers/feedback');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/',function (req,res) {
  res.send('Welcome');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
});

app.get('/characters', charactersController.all);

app.get('/characters/:id', charactersController.findById);

app.post('/characters', charactersController.create);

app.put('/characters/:id', charactersController.update);

app.delete('/characters/:id', charactersController.delete)

app.get('/pictures', picturesController.all);

app.post('/pictures', picturesController.create);

app.put('/pictures/:id', picturesController.update);

app.post('/feedbacks', feedbackController.create);

app.get('/feedbacks', feedbackController.all);


db.connect('mongodb://127.0.0.1:27017/characters', function(err) {
  if(err) {
    return console.log(err);
  }
  app.listen(3500, function() {
    console.log('Server started on port 3500');
  });
});
