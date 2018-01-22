var https = require('https');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTMLChunks (option) {

  var str = '';

  https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');


  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
      str += data.toString();
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
    console.log(str);
  });
});
}

console.log(getAndPrintHTMLChunks());