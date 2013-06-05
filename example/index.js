var redisClient = require('./redis');
var riakClient = require('./riak');
var rr = require('../index');

var rr = new rr({
	redisClient: redisClient,
	riakClient: riakClient
});

var key = 'node-rr';
var bucket = 'novanet';

rr.save(key, bucket, function(err, result){
	// doing something with the result.
	console.log(result);
});