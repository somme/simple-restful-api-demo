
// Dependencies
var express = require('express');
var router = express.Router();


// Models
var Product = require('../models/product');

var catchError = function(err, req, res, next){
	console.error(err.errors);
	//do something with errors

}


Product.methods(['get', 'put', 'post', 'delete'])
	
Product.register(router, '/products');

Product.on('error', catchError);

// Return router
module.exports = router;
