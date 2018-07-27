const bcrypt = require('bcryptjs');
const { User } = require('../models');

module.exports = {
  signin(_req, res) {
    return res.render('auth/signin');
  },

  signup(_req, res) {
    return res.render('auth/signup');
  },

  async register(req, res) {
    const { email } = req.body;

    if (await User.findOne({ where: { email } })) {
      return res.redirect('signup');
    }

    const password = await bcrypt.hash(req.body.password, 5);

    await User.create({ ...req.body, password });

    return res.redirect('/');
  },
};
