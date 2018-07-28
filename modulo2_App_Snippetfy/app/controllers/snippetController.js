const { Snippet } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const snippet = await Snippet.create({
        ...req.body,
        CategoryId: req.params.categoryId,
      });

      req.flash('success', 'Snippet criado com sucesso');

      return res.redirect(`/app/categories/${req.params.categoryId}/snippets/${snippet.id}`);
    } catch (err) {
      return next(err);
    }
  },
};
