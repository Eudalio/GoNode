const app = require('express')();
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const dbConfig = require('./config/database');

mongoose.connect(dbConfig.url);
requireDir(dbConfig.modelsPath);

app.listen(3000);
