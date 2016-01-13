var sftp = require('nodesftp');

var options = {
  host: '192.168.0.0',
  port: '22',
  username: 'user',
  privateKey: 'path/to/key.pem'
};

sftp.upload(options, 'path/to/remote/file', 'path/to/local/file');
