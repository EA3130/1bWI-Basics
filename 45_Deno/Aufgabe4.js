let age = parseInt(prompt("Bitte gib dein Alter ein"));

if (age < 0) {
    console.log("Ungültiges Alter");
} else if (age < 12) {
    console.log("Du bist ein Kind");
} else if (age < 18) {
    console.log("Du bist ein Teenager");
} else if (age < 50) {
    console.log("Du bist ein Erwachsener");
} else {
    console.log("Du bist ein Senior");
}
