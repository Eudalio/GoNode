const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const Controllers = requireDir('./controllers');

/*
 * Auth
*/

routes.post('/signup', Controllers.authController.signup);
routes.post('/signin', Controllers.authController.signin);

module.exports = routes;
