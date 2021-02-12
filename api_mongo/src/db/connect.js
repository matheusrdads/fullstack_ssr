const mongoose = require("mongoose")

function connect() {
  mongoose
    .connect('mongodb://localhost/recodepro', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { //confirmando a conexao
    }).catch((error) => {
      console.log(`Erro ao conectar${error}`)//verificando erros se não conseguir conexção
    })
}

module.exports = connect()