let count = parseInt(prompt("how many numbers would you like to enter?"));
let sum = 0;

for (let i = 0; i < count; i++) {
    let number = parseFloat(prompt("enter number " + (i + 1)));
    sum += number;
}


let average = sum / count;
console.log("The average is: " + average);