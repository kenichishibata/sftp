[![NPM](https://nodei.co/npm/sftp-node.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/sftp-node)
[![Build Status](https://travis-ci.org/kenichishibata31/sftp.svg)](https://travis-ci.org/kenichishibata31/sftp)

# sftp
No nonsense sftp client module for nodejs
# Why?
Because most of the sftp upload functions does not work well for me

# functions
## upload(credentials,remoteFilePath,localFilePath)
Uploads the file
```
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

```
That's it! 3 lines of code then it uploads your file!

No defaults! defaults sucks and makes it hard to debug

Now go and tell your boss that you are awesome!

##TODO
many functions
add password?
add async?
