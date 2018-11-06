const gd = require('globals-docs');


exports.globallink = ({ name, url, ...rest }, options) =>
  options.fn({ name, url: (name && !url) ? gd.getDoc(name) : url, ...rest });
