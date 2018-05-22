var Characters = require('../models/characters');

exports.all = function (req, res) {
  Characters.all(function (err, docs) {
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
}

exports.findById = function (req, res) {
  Characters.findById(req.params.id, function (err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(doc);
  })
}

exports.create = function (req, res) {
  var character = {
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    description: req.body.description
  };
  Characters.create(character, function(err,result) {
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(character);
  })
}
exports.update = function (req, res) {
  Characters.update(req.params.id,
    { id: req.body.id,
      name: req.body.name,
      image: req.body.image,
      description: req.body.description},
    function(err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
      res.sendStatus(200);
    })
}
exports.delete = function (req, res) {
  Characters.delete(req.params.id, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.sendStatus(200);
  })
}
