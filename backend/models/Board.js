const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId,
    ref: "User",
  }, 
  title: {
    type: String,
    required: true
  },
  default: {
    type: Boolean,
    required: true
  },
}, {
  timestamps: true
})

module.exports = Board = mongoose.model('Board', BoardSchema);