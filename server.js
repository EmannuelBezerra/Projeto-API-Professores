//Importação da aplicação
const app = require ('./src/app')

//Porta do servidor
const PORTA = 3000

// Inicia servidor
app.listen(PORTA, () => {
console.log(`Servidor rodando na porta ${PORTA}`)
})