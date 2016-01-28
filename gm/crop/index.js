var fs = require('fs')
  , gm = require('gm')
  , path = require('path');

var src = path.join(__dirname, '..', 'lena.jpg');
var dest = path.join(__dirname, 'dist');

gm(src).size(function(err, obj) {
  if (!err) {
    var width = obj.width
      , num = 8
      , height = obj.height / 8
      ;
    for (var i=0; i<num; i++) {
      gm(src)
        .crop(width, height, 0, height * i)
        .quality(10)
        .write(path.join(dest, i + '.jpg'), function(err) {
      });
    }
  }
});