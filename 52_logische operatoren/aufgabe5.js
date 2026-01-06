let heartRate = parseInt(prompt("Enter your heart rate"));
let age = parseInt(prompt("Enter your age"));

if (age > 30 && heartRate < 100) {
    console.log("Light exercise");
} else if (age < 30 && heartRate > 120) {
    console.log("Intense exercise");
} else if (age >= 30 && heartRate >= 100 && heartRate <= 120) {
    console.log("Moderate exercise");
} else if (age < 30 && heartRate <= 120 && heartRate >= 100) {
    console.log("Warm-up exercise");
} else if (age < 30 && heartRate < 100) {
    console.log("Cool down exercise");
}