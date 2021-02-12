const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())//nativo do node
app.use(cors())

require('./src/db/connect')// conexao db

require('./src/models/Comment')//models
require('./src/models/Product')//models
const Comment = mongoose.model('comments')
const Product = mongoose.model('products')


app.get('/comments', async (req, res) => {
  const commentsResponse = await Comment.find()//find seleciona doda collection
  const commentsJson = await commentsResponse

  return res.json(commentsJson)
})

app.get('/products', async (req, res) => {
  const productsResponse = await Product.find()//find seleciona doda collection
  const productsJson = await productsResponse

  return res.json(productsJson)
})

app.post('/comments', async (req, res) => {
  const newComment = new Comment({//rececebdo pelo body os dados do formulario e criando um novoUsuario
    nome: req.body.nome,
    msg: req.body.msg,
    senha: req.body.senha
  })
  newComment.save()

})


app.listen(4444, () => { console.log("Servidor rodando na porta 4444") })