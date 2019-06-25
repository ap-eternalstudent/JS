// temperature reading in Kelvin
const kelvin = 293;

// convert Kelvin to Deg C
let celcius = kelvin - 273;

// convert Celcius to Fahrenheit

let fahrenheit = celcius * (9/5) + 32

// round fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)