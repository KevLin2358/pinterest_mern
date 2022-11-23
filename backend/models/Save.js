const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaveSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId,
    ref: "User",
  }, 
  pin: {
    type: Schema.Types.ObjectId,
    ref: "Pin",
  },
  board: {
    type: Schema.Types.ObjectId,
    ref: "Board",
  }
}, {
  timestamps: true
})

module.exports = Save = mongoose.model('Save', SaveSchema);