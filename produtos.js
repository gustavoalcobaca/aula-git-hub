const carro = {
    marca: "Ferrari 812 Superfast",
    motor: "V12",
    potencia: "789cv",
}
for (let motor in carro){
    console.log(`${motor}: ${carro[motor]}`);
}
