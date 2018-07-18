const express = require('express')
const app = express()

app.get('/teste', (req, res, next) => {
    res.send('Hello Eudálio Sousa')
});

app.use('/user', (req, res, next) => {
    console.log('Acessou!')
    next()
})

app.get('/user', (req, res, next) => {
    res.send('Usuário: Eudálio')
});

app.get('/user/nc', (req, res, next) => {
    res.send('Usuário: Eudálio Sousa')
});

app.listen(3000)