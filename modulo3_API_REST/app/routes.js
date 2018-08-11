const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const authMiddlewares = require('./middlewares/auth');

const Controllers = requireDir('./controllers');

/*
 * Auth
*/

routes.post('/signup', Controllers.authController.signup);
routes.post('/signin', Controllers.authController.signin);

/*
 * =========
 * Auth routes
*/

routes.use(authMiddlewares);

routes.get('/tweets', (req, res) => res.send('OK'));

module.exports = routes;
