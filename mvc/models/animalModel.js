class Animal{
    tamanho
    cor
    raca
    grupo

    constructor(cor, raca, grupo){

        this.cor = cor
        this.raca = raca
        this.grupo = grupo
    }

    andar(){
        console.log("andou")
    }
}

let gato = new Animal("marrom", "Siames", "mamifero")
let cachorro = new Animal("preto", "pitcher", "mamifero")

console.log(gato.cor)
console.log(cachorro.cor)