var path = require('path')
  , fs = require('fs')
  , existsSync = fs.existsSync || path.existsSync; // <=0.6


exports.resolve = function(p, exts) {
  if (existsSync(p)) { return p; }
  
  if (!exts) {
    exts = Object.keys(require.extensions).map(function(ext) { return ext; });
  } else if ('string' == typeof exts) {
    exts = [ exts ];
  }
  
  var ext, f;
  for (var i = 0, len = exts.length; i < len; ++i) {
    ext = exts[i];
    if ('.' != ext[0]) { ext = '.' + ext; }
    f = p + ext;
    if (existsSync(f)) { return f; }
  }
  
  return p + '.js';
};
