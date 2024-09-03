const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class: { type: String, required: true },
  address: { type: String }
});

module.exports = mongoose.model('Student', studentSchema);
