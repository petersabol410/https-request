var getHTML = require('./http-functions');

function upperCase (html) {
  console.log(html.toUpperCase());
}

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML( options, upperCase);