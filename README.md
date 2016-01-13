# sftp
No nonsense sftp client module for nodejs

# Why?
Because most of the sftp upload functions does not work well for me

# functions
## upload(credentials,remoteFilePath,localFilePath)
Uploads the file
```
var sftp = require('nodesftp');

var options = {
  host: 192.168.0.0,
  port: 22,
  username: user,
  privateKey: require('fs').readFileSync(path/to/key.pem)
};

sftp.upload(options, 'path/to/remote/file', 'path/to/local/file');

```
That's it! 3 lines of code then it uploads your file!

No defaults! defaults sucks and makes it hard to debug

Now go and tell your boss that you are awesome!

##TODO
many functions
add password?
add async?
