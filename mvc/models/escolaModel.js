const Escola = {
    Endereco: "",
    Nome:"",
    Professores:"",
    Diretor:"",
    Telefone:"",
    CNPJ: "",
    RegistroJSON: function(){
        return{
            "Endereco":this.Endereco,
            "Nome":this.Nome,
            "Professores":this.Professores,
            "Diretores":this.Diretor,
            "Telefone":this.Telefone,
            "CNPJ":this.CNPJ
        }
    }
}
module.exports = Escola