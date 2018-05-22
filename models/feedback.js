var db = require('../db');

exports.all = function (cb) {
  db.get().collection('feedbacks').find().toArray(function (err,docs) {
    cb(err,docs);
  })
}
exports.create = function(feed, cb) {
  db.get().collection('feedbacks').insert(feed, function (err, result) {
    cb(err,result);
  })
}
