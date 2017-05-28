const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
	name: String,
	owner: String,
	image: String,
	description: String
});

// NOTE: Mongoose mpromise (mongoose's default promise library) is deprecated, 
// I need to plug in my own promise library instead.
mongoose.Promise = require('bluebird');

module.exports = mongoose.model('tests', testSchema);