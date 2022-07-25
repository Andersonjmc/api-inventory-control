// Criando uma Rota, com um dos Verbos (get) HTTP
// req - de requisição e res - de resposta
// read do CRUD - exibe registros (leitura)
const industrial = (app) => {
    app.get('/', (req, res) => {
        // res, Resposta usando send
        res.send('Hello Usuario! get')
    })
    // create do CRUD - inserir registros
    app.post('/', (req, res) => {
        // res, Resposta usando send
        res.send('Hello Usuario! post')
    })

    // update do CRUD - atualizar registros
    app.put('/', (req, res) => {
        // res, Resposta usando send
        res.send('Hello Usuario! put')
    })
    // delete do CRUD - deleta registros
    app.delete('/', (req, res) => {
        // res, Resposta usando send
        res.send('Hello Usuario! delete')
    })
}

module.exports = industrial;

