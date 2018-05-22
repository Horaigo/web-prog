var Pictures = require('../models/pictures');

exports.all = function (req, res) {
  Pictures.all(function (err, docs) {
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
}
exports.create = function (req, res) {
  var picture = {
    id: req.body.id,
    image: req.body.image
  };
  Pictures.create(picture, function(err,result) {
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(picture);
  })
}
exports.update = function (req, res) {
  Pictures.update(req.params.id,
    { id: req.body.id,
      image: req.body.image
    },
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
