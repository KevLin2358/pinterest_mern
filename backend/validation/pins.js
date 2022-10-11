const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePinInput(data) {
  let errors = {};

  data.text = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 5, max: 140 })) {
    errors.text = 'Pin title must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.text = 'Title field is required';
  }

  if (Validator.isEmpty(data.image)) {
    errors.text = 'Image is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};