var crypto = require('crypto');

module.exports = {
  generateSalt: function () {
    var set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ';
    var salt = '';
    for (var i = 0; i < 10; i++) {
      var p = Math.floor(Math.random() * set.length);
      salt += set[p];
    }
    return salt;
  },

  md5: function (str) {
    return crypto.createHash('md5').update(str).digest('hex');
  }
};
