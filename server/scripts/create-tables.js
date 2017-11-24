'use strict';

var server = require('../server');
var ds = server.dataSources.db;
var lbTables = [
  'User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'Payment'
];

ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
  ds.disconnect();
});

// ds.autoupdate('Payment', function(err, result) {});
