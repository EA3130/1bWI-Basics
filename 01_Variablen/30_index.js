let apple = "Apple";
let banana = "Banana";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleweight = 0.34;
let bananaweight = 0.22;

let appleweight1 = 1 / appleweight;
let bananaweight1 = 1 / bananaweight;

let applePrice = appleweight1  / applePricePerKilo;
let bananaprice = bananaweight1  / bananaPricePerKilo;

console.log("Preis von 8 äpfel" + " " + 8 * applePrice + " " + "Euro");
console.log("Preis von 17 bananen" + " " + 17 * bananaprice + " " + "Euro");
console.log("Preis von 1 tonne Äpfel" + " " + 1000 * applePrice + " " + "Euro");
console.log("Preis von 1 tonne Bananen" + " " + 1000 * bananaprice + " " + "Euro");