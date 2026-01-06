let age = parseInt(prompt("Please enter your age"));
let money = parseInt(prompt("Please enter the amount of money you have"));
if (age <= 18 && money > 12) {
    console.log("You can go to the movie");
} else if (age > 18 && money < 12) {
    console.log("You dont have enough money");
} else if (age < 18 && money > 12) 
    console.log("You are too young");