const calculadora ={
    numero1 : 10,
    numero2 : 5,
multiplicar (){
    return this.numero1 * this.numero2
},
somar (){
    return this.numero1 + this.numero2
},
subtrair (){
    return this.numero1 - this.numero2
},
dividir (){
    return this.numero1 / this.numero2
}
}

    console.log(calculadora.multiplicar())