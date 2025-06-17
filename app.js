const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){

    let valueInEuro = valueInDollar / 1.07 ;
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}




// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// function fromDollarToYen (dollar){
// let eur = dollar / oneEuroIs["USD"];
// let yen = eur * oneEuroIs["JPY"];
// return yen;
// }
// 
// 
// function fromEuroToDollar (eur){
// let dollar = eur * oneEuroIs["USD"];
// return dollar;
// }
// 
// function fromYenToPound (yen){
// let eur = yen / oneEuroIs["JPY"];
// let pound = eur * oneEuroIs["GBP"];
// return pound;
// }

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }