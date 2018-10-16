const mongoose = require("mongoose");

module.exports = mongoose.model('Todo', {
  TodoName: String,
  description: String,

});
