//Importação do express
const express = require('express');

//Criando roteador
const router = express.Router();

//Importação do controller
const professorController = require('../controllers/professorController')

//Definição das rotas
//Rota GET: listar professores
router.get('/professores', professorController.listarProfessores)

//Rota GET: Buscar professor por ID
router.get('/professores/:id', professorController.buscarProfessoresPorID)

//Rota POST: Cadastrar novo professor
//router.post('/professores', professorController.cadastrarProfessor)
router.post('/professores', professorController.cadastrarProfessores)

//Rota PUT: Atualizar professor
router.put('/professores/:id', professorController.atualizarProfessor)

//Rota DELETE: Deletar professor
router.delete('/professores/:id', professorController.deletarProfessorPorId)

//Exporta rotas
module.exports = router