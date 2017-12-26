var uid = function(length) {
	var str = '';
	var src = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	
	for (var i = 0; i < length; i++) {
		str += src.charAt(myRandom(0, src.length - 1));
	}
	return str;
}

var myRandom = function(start, end) { //[start, end]
	return Math.floor(Math.random() * (end - start + 1)) + start;
}

exports.uid = uid