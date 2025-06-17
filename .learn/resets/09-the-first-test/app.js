// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (dollar){
let eur = dollar / oneEuroIs["USD"];
let yen = eur * oneEuroIs["JPY"];
return yen;
}


function fromEuroToDollar (eur){
let dollar = eur * oneEuroIs["USD"];
return dollar;
}

function fromYenToPound (yen){
let eur = yen / oneEuroIs["JPY"];
let pound = eur * oneEuroIs["GBP"];
return pound;
}