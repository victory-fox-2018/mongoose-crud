module.exports = (hex) => {
  const mongoose = require('mongoose');
  const ObjectId = mongoose.Types.ObjectId;

  return new ObjectId(hex);
};