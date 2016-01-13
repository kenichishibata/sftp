module.exports = function upload(credentials,pathToRemoteFile,pathToLocalFile){
var Client = require('ssh2').Client;

var options = {
    host: credentials.HOST,
    port: credentials.PORT,
    username: credentials.USERNAME,
    privateKey: require('fs').readFileSync(credentials.PRIVATE_KEY)
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
