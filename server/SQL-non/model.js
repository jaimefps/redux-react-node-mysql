var mongoose = require('mongoose');

var testSchema = mongoose.Schema({
	name: String,
	owner: String,
	image: String,
	description: String
});

module.exports = mongoose.model('tests', testSchema);