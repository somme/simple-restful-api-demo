
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//validation

var minLength = function(v){
	return v.length > 5;
}

var maxLength = function(v){
	return v.length < 10;		
}

var emailMatch = function(v){
	//basic email regex
	return /.+@.+\..+/i.test(v);
}

var charLength = [
	{ validator: minLength, msg: 'Must be more than 5 characters' }, 
	{ validator: maxLength, msg: 'Must be less than 10 characters' }
];
	
var emailAddress = [
	{ validator: emailMatch, msg: 'Must be a valid email address' }
];	

// Schema
var productSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is required'], validate: charLength},
    email: { type: String, required: [true, 'Email address is required'], validate: emailAddress},
    phone: { type: Number, required: [true, 'Phone is required']},
});

// Return model
module.exports = restful.model('Products', productSchema);