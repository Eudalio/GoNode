/* const { User } = require('../models'); */

module.exports = {
  signin(_req, res) {
    return res.render('auth/signin');
  },

  signup(_req, res) {
    return res.render('auth/signup');
  },
};
