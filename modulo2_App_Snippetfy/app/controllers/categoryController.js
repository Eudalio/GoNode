const { Category } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const cat = await Category.create({
        ...req.body,
        UserId: req.session.user.id,
      });

      req.flash('success', 'Categoria criada com sucesso');

      return res.redirect(`/app/categories/${cat.id}`);
    } catch (err) {
      return next(err);
    }
  },
};
