var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	name    : { type : String },
	email   : { type : String },
	subject : { type : String },
	message : { type : String },
	date    : { type : String },
	systemdate : {type :String },
	status  : {type :String}
});

module.exports = mongoose.model('User', userSchema);