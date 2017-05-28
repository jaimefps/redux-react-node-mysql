const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

// NOTE: Mongoose mpromise (mongoose's default promise library) is deprecated, 
// I need to plug in my own promise library instead.
mongoose.Promise = require('bluebird');

module.exports = mongoose;
