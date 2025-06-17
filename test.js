test("Euros to dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("Dollars to Yen", function() {
        const { fromDollarToYen } = require('./app.js');

    // Convierto de dolares a euros dividiendo y de euros a yenes multiplicando
    const expected = (3.5/1.07)*156.5;

    expect(fromDollarToYen(3.5)).toBe(expected); 
})



test("Yen to Pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Convierto los yenes a euros dividiendo y de euros a libras multiplicando
    const expected = (3.5 / 156.5) * 0.87;

    expect(fromYenToPound(3.5)).toBe(expected); 
})