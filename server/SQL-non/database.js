const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

// DeprecationWarning: 
// Mongoose: mpromise (mongoose's default promise library) is deprecated, 
// plug in your own promise library...

// This is a recommended fix.
mongoose.Promise = require('bluebird');

module.exports = mongoose;

