const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId,
    ref: "User",
  }, 
  description: {
    type: String,
    required: true
  },
  Pin: {
    type: Schema.Types.ObjectId,
    ref: "Pin",
  },
  HeartCount: {
    type: Number,
    default: 0
  },
  HelpfulCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = Pin = mongoose.model('Comment', CommentSchema);