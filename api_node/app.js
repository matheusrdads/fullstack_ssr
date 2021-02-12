const express = require('express')
const app = express()
const connection = require('./connection')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res, next) => {
    connection.query("SELECT * FROM recodepro.comments left join recodepro.orders on comments.nome=orders.fullname", (error, result,) => {
        res.json(result)
    })
})

app.get('/products', (req, res, next) => {
    connection.query("SELECT * FROM recodepro.products", (error, result,) => {
        res.json(result)
    })
})

app.post('/salvando', (req, res) => {
    let dados = [];
    dados.push({
        nome: req.body.nome,
        msg: req.body.msg
    });

    connection.query('insert into comments set?', dados, () => {
        dados = []
        return res.json({ messagem: "Dados enviados com Sucesso!" })
    })
})

app.listen(5001, () => { console.log("servidor rodando") })