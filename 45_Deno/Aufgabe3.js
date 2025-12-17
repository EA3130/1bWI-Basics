let number1 = parseInt(prompt("Bitte gib eine Zahl ein"));
let number2 = parseInt(prompt("Bitte gib eine weitere Zahl ein"));
let operator = prompt("Bitte gib einen Operator ein (+, -, *, /)");

if ( operator === "+" )   {
    console.log( number1 + number2 );
} else if ( operator === "-" ) {
    console.log( number1 - number2 );
} else if ( operator === "*" ) {
    console.log( number1 * number2 );
} else if ( operator === "/" ) {
    console.log( number1 / number2 );
} else {
    console.log("Ungültiger Operator");
}
