var fs = require('fs');
var sftp = require('./../sftp');

var options = {
  host: '52.69.94.92',
  port: '22',
  username: 'ken',
  privateKey: './key'
};

sftp.upload(options, '/home/ken/testfile', './testfile', function(err,res){
  if(err) console.log('err: '+err);
  else{
    console.log('res: '+res);
  }
});
