//Importando a conexão com o banco de dados
const conexao = require('../database/conexao');

//Função para listar todos os professores
const listarProfessores = async () => {
    //Comando SQL para selecionar todos os professores
    const sql = 'SELECT * FROM professores';
    //Executando o comando SQL
    const [rows] = await conexao.execute(sql);
    //Retornando os professores encontrados
    return rows;
}

//Função para buscar professor por ID
const buscarProfessorPorId = async (id) =>{
    //Consulta sql com parâmetro ID
    const sql = 'SELECT * FROM professores WHERE id = ?';
    //Executando consulta
    const [rows] = await conexao.execute(sql, [id]);
    //Retornando o professor encontrado
    return rows[0];
}

//Função para cadastrar um novo professor
const cadastrarProfessor = async (professor) =>{
    //Obtendo a estrutura do objeto
    const {nome, disciplina, email, salario} = professor
    
    //Comando SQL para inserir um novo professor
    const sql = "INSERT INTO professores(nome,disciplina,email,salario) VALUES(?,?,?,?)";
    //Executando comando SQL
    const [resultado] = await conexao.execute(sql, [
        nome,
        disciplina,
        email,
        salario
    ])
    //Retorna o ID do novo professor
    return resultado.insertId               
}

//Função para atualizar professor
const atualizarProfessor = async (id, professor) => {
    //Obtendo a estrutura do objeto
    const {nome, disciplina, email, salario} = professor
    //Comando SQL de atualização
    const sql = `
        UPDATE professores
        SET nome = ?, disciplina = ?, email = ?, salario = ?
        WHERE id = ?
    `
    //Execução do SQL
    await conexao.execute(sql, [
        nome,
        disciplina,
        email,
        salario,
        id
    ])
}

//Função para deletar professor
const deletarProfessorPorId = async (id) =>{
    //Consulta sql com parâmetro ID
    const sql = 'DELETE FROM professores WHERE id = ?';
    //Executando consulta
    const [rows] = await conexao.execute(sql, [id]);
}

//Exportando as funões
module.exports = {
    listarProfessores,
    buscarProfessorPorId,
    cadastrarProfessor,
    atualizarProfessor,
    deletarProfessorPorId
}