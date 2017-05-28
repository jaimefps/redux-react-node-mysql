const mongoose = require('mongoose');

const document = mongoose.Schema({
	name: String,
	owner: String,
	image: String,
	description: String
});

module.exports = mongoose.model('Document', document);