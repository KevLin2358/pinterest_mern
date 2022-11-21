const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId,
    ref: "User",
  }, 
  text: {
    type: String,
    required: true
  },
  pin: {
    type: Schema.Types.ObjectId,
    ref: "Pin",
  },
}, {
  timestamps: true
})

module.exports = Pin = mongoose.model('Comment', CommentSchema);