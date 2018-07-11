'use strict';


const fs = require('fs');
const util = require('util');


var servers = ['nats://127.0.0.1:5222'];
var nats = require('nats');
// Randomly connect to a server in the cluster group.
var nc = nats.connect({
  'servers': servers
});



nc.on('error', function(e) {
  console.log('Error [' + nats.options.url + ']: ' + e);
  process.exit();
});

nc.on('close', function() {
  console.log('CLOSED');
  process.exit();
});

console.log('Client Connected to Server 5222');

var subject = process.argv[2] || 'foo';

if (!subject) {
  console.log('Usage: node-sub <subject>');
  process.exit();
}

console.log('Listening on [' + subject + ']');

nc.subscribe(subject, function(msg) {
  fs.appendFileSync('./output/result.txt', util.format('Client: 5222, Subject: %s, MSG: %s, Received At: %s\n', subject,  msg, new Date()));
  console.log('Received for 5222"' + msg + '"');
});
