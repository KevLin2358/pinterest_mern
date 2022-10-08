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
    type: String,
    required: true
  },
//   HeartCount: {
//     type: Parse,
//     default: Date.now
//   }
}, {
  timestamps: true
})

module.exports = Pin = mongoose.model('Comment', CommentSchema);