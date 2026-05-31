//Importanto o model professores
const professorModel = require('../models/professoresModel')

//Listar Professores
const listarProfessores = async (req, res) => {

    //Buscar professores no banco
    const professores = await professorModel.listarProfessores()

    //Retorno do JSON
    res.json(professores)
}

//Busca por ID
const buscarProfessoresPorID = async (req, res) => {

    //Captura ID da URL
    const { id } = req.params

    //Busca Professor
    const professor = await professorModel.buscarProfessorPorId(id)

    //Verificação da existência do professor
    if(!professor){
        //Retorno do erro
        return res.status(404).json({
            mensagem: 'Professor não encontrado'
        })
    }

    //Retorno do professor encontrado
    res.json(professor)
}

//Criar um ou mais novos Professores
const cadastrarProfessores = async (req, res) => {
    //Capturando os dados
    const dados = req.body

    //Normalização dos dados para um arrau
    const professores = Array.isArray(dados) ? dados :[dados]

    //Validação dos dados
    for (const p of professores){
        if(!p.nome || !p.disciplina || !p.email || !p.salario){
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios'});
        }
    }


    //Salvamento dos professores no banco
    const ids = [];
    for (const professor of professores){
        const id = await professorModel.cadastrarProfessor(professor);
        ids.push(id);
    }

    //Mesagem de confirmação de sucesso
    res.status(201).json({ mensagem: 'Professores cadastros com sucesso', ids});

}

//Criar novo Professor
/*const cadastrarProfessor = async (req, res) => {

    //Captura dados do corpo da requisição
    const {nome, disciplina, email, salario} = req.body

    //Validação dos dados
    if(!nome || !disciplina || !email || !salario){
        return res.status(400).json({
            //Retorno do erro
            mensagem:'Todos os campos são obrigatórios'
        })
    }

    //Criação do objeto Professor
    const professor = {
        nome,
        disciplina,
        email,
        salario
    }

    //Salvamento do professor no banco
    const id = await professorModel.cadastrarProfessor(professor)

    //Mesagem de confirmação de sucesso
    res.status(201).json({
        mensagem: 'Professor cadastrado com sucesso',
        id
    })
}*/

//Atualizar Professor
const atualizarProfessor = async (req, res) => {
    //Captura ID
    const {id} = req.params

    //Captura dados
    const {nome, disciplina, email, salario} = req.body

    //Criação do objeto Professor
    const professor = {
        nome,
        disciplina,
        email,
        salario
    }

    //Atualiza o professor
    await professorModel.atualizarProfessor(id, professor)

    //Mensagem de sucesso retornada
    res.json({
        mensagem: 'Professor atualizado com sucesso'
    })
}

//Deletar professor
const deletarProfessorPorId = async (req, res) => {
    //Captura do ID
    const { id } = req.params

    //Remoção do professor
    await professorModel.deletarProfessorPorId(id)

    //Mensagem de sucesso retornada
    res.json({
        mensagem: 'Professor removido com sucesso'
    })
}

//Exportação das funções
module.exports = {
    listarProfessores,
    buscarProfessoresPorID,
    //cadastrarProfessor,
    cadastrarProfessores,
    atualizarProfessor,
    deletarProfessorPorId
}