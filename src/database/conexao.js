//Importanto a biblioteca mysql2 utilizando promises 
const mysql = require('mysql2/promise');

//Criando a conexão com o banco de dados
//Criando um pool de conexões
const conexao = mysql.createPool({
    //Endereço do servidor do banco de dados
    host: 'localhost',
    //Usuário do banco de dados
    user: 'root',
    //Senha do banco de dados (Use sua senha aqui)
    password: '1234',
    //Nome do banco de dados
    database: 'escola'
})

//Exportando a conexão
module.exports = conexao;