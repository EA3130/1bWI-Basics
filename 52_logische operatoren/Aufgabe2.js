let trafficlevel = parseInt(prompt("Enter the trafficlevel"));
let speed = parseInt(prompt("Enter your speed"));

if (trafficlevel > 7 && speed > 80) {
    console.log("Slow down!");
} else {
    console.log("You are good to go");
}