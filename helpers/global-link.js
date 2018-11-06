const gd = require('globals-docs');


exports.globallink = (longname, options) => {
  let result = null;

  if (longname && typeof longname === 'string') {
    const url = gd.getDoc(longname);

    if (url) {
        result = options.fn({ name: longname, url });
    }
  }

  return result;
};
