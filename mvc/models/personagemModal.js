class personagem{
    nome
    idade
    tamanho
    raca
    genero
    profissao

    constructor(nome, idade, tamanho, raca, genero, profissao){

        this.nome = nome
        this.idade = idade
        this.tamanho = tamanho
        this.raca = raca
        this.genero = genero
        this.profissao = profissao

    }


    andar(){
        console.log("O personagem andou!")
        
    }
    correr(){
        console.log("O personagem correu!")
        
    }


}

let flora = new personagem("Flora", "20", "160cm", "humano", "Feminino", "pedreiro")

console.log(flora.nome+" "+flora.idade)