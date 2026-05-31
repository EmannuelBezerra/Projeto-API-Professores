//Importação do express
const express = require('express')

//Criação da aplicação
const app = express()

//Importação das rotas
const professorRoutes = require('./routes/professorRoutes')

//Middleware para JSON
app.use(express.json())

//Usa rotas
app.use(professorRoutes)

//Exporta app
module.exports = app