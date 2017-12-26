var mongoose = require("mongoose");
var Tiny = mongoose.model('Tiny');
var utils = require('../utils');
//var storage = require('node-persist');

// storage.initSync();

// if (!storage.getItem('counter')) {
// 	storage.setItem('counter','0');
// }

// var getMagic() {
// 	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
// 	var arr = [0,0,0,0,0]
// 	var str = [chars[array[0]],chars[array[1]],chars[array[2]],chars[array[3]],chars[array[4]]]
// 	return str.join();
// }

var host = "tinyurl.techbow.com:";
var port = "3000/";

var getIndex = function(req, res, next) {
  res.render('index', { 
  	title: 'Techbow TinyURL Platform',
  	shortUrl: ''
  });
}

var createTiny = function(req, res) {
	//var counter = storage.getItem('counter');
	//storage.setItem('counter', ++counter);
	var uid = utils.uid(5);
	new Tiny({
		longUrl: req.body.longUrl,
		shortUrl: host + port + uid
	}).save(function(err, tiny, count){
		res.render('index', {
			title: 'Techbow TinyUrl Platform',
			shortUrl: tiny.shortUrl
		});
	});
};

var redirectTiny = function(req, res) {
	console.log('redirect Tiny: ' + req.params.uid);
	if (!req.params.uid) {
		return;
	}
	Tiny.findOne({
		shortUrl: host + port + req.params.uid
	}, function(err, tiny){
		console.log('error: ' + err);
		console.log('tiny: ' + tiny);
		if (tiny) {
			res.redirect('http://' + tiny.longUrl);
		} else {
			res.redirect('/');
		}
	});
};

exports.getIndex = getIndex;
exports.createTiny = createTiny;
exports.redirectTiny = redirectTiny;






