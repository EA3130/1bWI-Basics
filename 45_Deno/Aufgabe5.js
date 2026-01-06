let Temprature = parseInt(prompt("Bitte gib die Temprature ein"));

if (Temprature < 0) {
    console.log("Es ist sehr kalt bleib drinnen")
} else if (Temprature < 10) {
    console.log("zieh dich warm an")
} else if (Temprature < 20) {
    console.log("Raus gehen")
} else if (Temprature < 30) {
    console.log("Baden gehen")
} else if (Temprature < 40) {
    console.log("In die Kühlbox gehen")
}