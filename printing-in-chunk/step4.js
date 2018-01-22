
var https = require('https');


function printHTML (html) {
  console.log(html);
}
var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

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
}

getHTML( options, printHTML);

