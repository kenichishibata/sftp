/*jshint -W083 */
var Client = require('ssh2').Client;
var fs = require('fs');

function upload(credentials,pathToRemoteFile,pathToLocalFile,callback){
  var pem = fs.readFileSync(credentials.privateKey);
  var options = {
      host: credentials.host,
      port: credentials.port,
      username: credentials.username,
      privateKey: pem
  };
  var client = new Client();
  client.on('ready', function() {
    client.sftp(function(err, sftp) {
      sftp.fastPut(pathToLocalFile, pathToRemoteFile ,function(err,res) {
        if (err){ callback(err,null); }
        client.end();
      });
    });
  }).connect(options);
}


module.exports.upload = upload;
