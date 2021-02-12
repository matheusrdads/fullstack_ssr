// modelo de tabela do banco / possível criar a tabela antes do banco no mongo const {propertyName} = objectToDestruct
const mongoose = require('mongoose')
const Schema = mongoose.Schema // permitirar criar a collection

const Product = new Schema({ // criando o modelo da collection
  categories: {
    type: String,
    required: true
  },
  descripton: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  finalprice: {
    type: Number,
    required: true
  },
  images: {
    type: String,
    required: true
  }
})

mongoose.model('products', Product)//criando a collection 'usuarios' com base no Schema Usuario.