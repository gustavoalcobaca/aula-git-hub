const carro = {
    marca: "Ferrari 812 Superfast",
    motor: "V12",
    potencia: "789cv",
}
for (let chave in carro){
console.log(`${chave}: ${carro[chave]}`)
}
console.log(Object.values(carro));
console.log(Object.keys(carro));