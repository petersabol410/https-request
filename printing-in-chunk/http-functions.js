module.exports = function getHTML (options, callback) {

var https = require('https');

https.get(options,function(response){

    response.setEncoding('utf8');

    var str  = '';

    response.on('data',function(data){
      str += data.toString();
      console.log('Recieved data length:' + data.length);
    });

      response.on('end',function(){
        console.log('Response stream completed ');
        callback(str);
      });
    });
};

