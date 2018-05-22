var db = require('../db');

exports.all = function (cb) {
  db.get().collection('characters').find().toArray(function (err,docs) {
    cb(err,docs);
  })
}
exports.findById = function (id,cb) {
  db.get().collection('characters').findOne({ id: id}, function (err,doc) {
    cb(err,doc);
  })
}
exports.create = function(character, cb) {
  db.get().collection('characters').insert(character, function (err, result) {
    cb(err,result);
  })
}
exports.update = function(id, newData, cb) {
  db.get().collection('characters').updateOne(
    { id: id},
    newData,
    function (err, result) {
      cb(err, result);
    }
  )
}
exports.delete = function(id, cb) {
  db.get().collection('characters').deleteOne(
    { id: id},
    function (err, result) {
      cb(err, result);
    }
  )
}
