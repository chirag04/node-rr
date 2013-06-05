var servers = [];

servers.push('127.0.0.1:11098');
servers.push('127.0.0.1:12098');
servers.push('127.0.0.1:13098');
servers.push('127.0.0.1:14098');
servers.push('127.0.0.1:15098');

var riak = require('riak-js').getClient({pool: {servers: servers}});
module.exports = riak;