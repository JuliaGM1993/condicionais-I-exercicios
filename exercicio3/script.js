const nacionalidade = [
    `brasileira`,
    `argentina`,
    `uruguaia`,
    `chilena`,
    `colombiana`
]

const suaNacionalidade = prompt("Qual sua nacionalidade?").toLowerCase()

const exercicio3 = suaNacionalidade =>{
if(suaNacionalidade === nacionalidade[0]){
        return nacionalidade[0]
    }else if
    (suaNacionalidade === nacionalidade[1]){
        return nacionalidade[1]
    }else if 
    (suaNacionalidade === nacionalidade[2]){
        return nacionalidade[2]
    }else if
    (suaNacionalidade === nacionalidade[3]){
        return nacionalidade[3]
    }else if
    (suaNacionalidade === nacionalidade[4]){
        return nacionalidade[4]
    }else
        return `Sua nacionalidade não foi encontrada`
}

console.log(`Sua nacionalidade é:`,exercicio3(suaNacionalidade))