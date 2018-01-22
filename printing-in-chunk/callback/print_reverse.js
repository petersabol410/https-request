var getHTML = require('./http-functions');

function upperCase (html) {
  console.log(html.split("").reverse().join(""));
}

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML( options, upperCase);