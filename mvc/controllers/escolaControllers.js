const app2 = require('../../startup.js')
const escolaModel = require('../models/escolaModel.js')

app2.get("/getAllEscola", (req, res) => {
    const schoolList = []

    for(let count = 6; count > 0; count--){
        const escola = escolaModel

        escola.Endereco = "R. Roberto Mange, 151 - Jardim Marupiara, Pres. Prudente - SP, 19060-030"
        escola.Nome = "Senai"
        escola.Professores = "Nilo, Leo"
        escola.CNPJ = "342432432"
        escola.Diretor = "Diretor"
        escola.Telefone = "(18) 3902-8500"

        schoolList.push(escola.RegistroJSON())
       
    }

    res.json(schoolList)

})