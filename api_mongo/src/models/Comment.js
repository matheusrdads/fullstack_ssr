// modelo de tabela do banco / possível criar a tabela antes do banco no mongo const {propertyName} = objectToDestruct
const mongoose = require('mongoose')
const Schema = mongoose.Schema // permitirar criar a collection

const Comment = new Schema({ // criando o modelo da collection
  nome: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  }
})

mongoose.model('comments', Comment)//criando a collection 'usuarios' com base no Schema Usuario.