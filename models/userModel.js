const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  isoMsg: {
    type: String,
  },
  data: {
    type: Array,
  },
  date: {
    type: Date,
    default: new Date().toISOString(),
  },
});

const User = mongoose.model('User', userSchema); //Collection
// const Testing = mongoose.model('Testing', userSchema); //Collection

module.exports = User;
