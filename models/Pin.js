const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId,
    ref: "User",
  }, 
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

module.exports = Pin = mongoose.model('Pin', PinSchema);