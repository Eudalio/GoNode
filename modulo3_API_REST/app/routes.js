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

/*
 * =========
 * Users
*/
routes.put('/users', Controllers.userController.update);

/*
 * =========
 * Tweets
*/
routes.post('/tweets', Controllers.tweetController.create);
routes.delete('/tweets/:id', Controllers.tweetController.destroy);

/*
 * =========
 * Likes
*/
routes.post('/like/:id', Controllers.likeController.toggle);
module.exports = routes;
