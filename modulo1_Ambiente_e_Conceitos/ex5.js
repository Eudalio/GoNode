const express = require('express')
const app = express()

// Duas requisições get ao mesmo destino /teste. Precisa-se utilizar um parâmetro (next) 
// para informar ao express que siga ao próximo middleware

app.get('/teste', (req, res, next) => {
    res.send('Hello Eudálio Sousa')
    next()
});

app.get('/teste', (req, res) => {
    console.log('Funfou!')
});

app.listen(3000)