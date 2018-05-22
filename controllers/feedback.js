var Feedback = require('../models/feedback');

exports.all = function (req, res) {
  Feedback.all(function (err, docs) {
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
}
exports.create = function (req, res) {
  var feed = {
    id: req.body.id,
    feed: req.body.feed
  };
  console.log(req.body);
  console.log(feed);
  Feedback.create(feed, function(err,result) {
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(feed);
  })
}
