var fs = require('fs');
var sftp = require('sftp-node');

var pem = fs.readFileSync('path/to/file.key');

var options = {
  host: '192.168.0.0',
  port: '22',
  username: user,
  privateKey: pem
};

sftp.upload(options, 'path/to/remote/file', 'path/to/local/file');
