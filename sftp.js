function upload(credentials,pathToRemoteFile,pathToLocalFile){
var Client = require('ssh2').Client;
var fs = require('fs');

var pem = fs.readFileSync(credentials.pem);

var options = {
    host: credentials.host,
    port: credentials.port,
    username: credentials.username,
    privateKey: pem
};

var client = new Client();
client.on('ready', function() {
  client.sftp(function(err, sftp) {
    if (err) throw err;
    sftp.fastPut(pathToLocal+file, pathToRemote+file ,function(err) {
      if (err) throw err;
      else {
        console.log('uploaded file to:'+pathToRemoteFile);
      }
      client.end();
    });
  });
}).connect(options);

};

module.exports.upload = upload ;
