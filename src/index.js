// Importando o pacote Express
const express = require('express')
// Usando o express em uma variável
const app = express();

// Usando a porta numa variável 
const port = 3000

// chamando o controller e passando o express
const industrial = require ("./controllers/alimento-industrial")
industrial(app);

// criando um servidor, com uma callback = (função)
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`)
})
