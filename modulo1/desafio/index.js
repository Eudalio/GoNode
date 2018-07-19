const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();

nunjucks.configure('views', {
  autoscape: true,
  express: app,
});

app.set('view engine', 'njk');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (_req, res) => {
  res.render('main');
});

app.param('nome', (req, res, next, nome) => {
  if (req.params.nome) {
    req.nome = nome;
    next();
  } else {
    res.redirect('/');
  }
});

app.get('/major/:nome', (req, res) => {
  res.render('major', { nome: `${req.nome}` });
});

app.get('/minor/:nome', (req, res) => {
  res.render('minor', { nome: `${req.nome}` });
});

app.post('/check', (req, res) => {
  const { nome, datanasc } = req.body;
  const idade = moment().diff(moment(datanasc), 'years');

  if (idade >= 18) {
    res.redirect(`/major/${nome}`);
  } else {
    res.redirect(`/minor/${nome}`);
  }
});

app.listen(3000);
