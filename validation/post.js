const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput (data) {
	let errors = {};

	data.text = !isEmpty(data.text) ? data.text : '';

	if(!Validator.isLength(data.text, {min: 0, max: 300})){
		errors.text = 'Post must be lower than 300 charachters'
	}

	if(Validator.isEmpty(data.text)) {
		errors.title = 'Text field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}