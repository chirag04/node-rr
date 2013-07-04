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

rr.prototype.saveList = function(key, bucket, cb) {
	if(!key) return cb(new Error('No key provided'));
	if(!bucket) return cb(new Error('No bucket provided'));
	var _this = this;
	_this.redis.lrange(key, 0, -1 , function(err, redisData){
		if(err) return cb(err);
		if(!res) return cb(new Error('Key not found in redis.'));
		_this.riak.get(bucket, key, function(err, riakData){
			riakData = JSON.parse(riakData);
			redisData.foreach(function(data,index){
				riakData.push(JSON.parse(data));
			});
			var allChat = JSON.stringify(riakData);
			_this.riak.save(bucket, key, allChat, function(err){
				if(err) return cb(err);
				cb(null, allChat);
			});
		});
	});
};

module.exports = rr;
