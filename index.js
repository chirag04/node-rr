function rr(options) {
	if(!options.redisClient) throw new Error('Redis Client is required');
	if(!options.riakClient) throw new Error('Riak Client is required');
  this.redis = options.redisClient;
  this.riak = options.riakClient;
}

rr.prototype.save = function(key, bucket, cb) {
	if(!key) return cb(new Error('No key provided'));
	if(!bucket) return cb(new Error('No bucket provided'));
	var _this = this;
	_this.redis.get(key, function(err, res){
		if(err) return cb(err);
		if(!res) return cb(new Error('Key not found in redis.'));
		_this.riak.save(bucket, key, res, function(err){
			if(err) return cb(err);
			cb(null,res);
		});
	});
};

module.exports = rr;
