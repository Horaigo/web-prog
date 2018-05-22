var db = require('../db');

exports.all = function (cb) {
  db.get().collection('pictures').find().toArray(function (err,docs) {
    cb(err,docs);
  })
}
exports.create = function(picture, cb) {
  db.get().collection('pictures').insert(picture, function (err, result) {
    cb(err,result);
  })
}
exports.update = function(id, newData, cb) {
  db.get().collection('pictures').updateOne(
    { id: id},
    newData,
    function (err, result) {
      cb(err, result);
    }
  )
}
