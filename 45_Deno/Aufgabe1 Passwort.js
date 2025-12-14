let password = prompt("Bitte gib dein Passwort ein");

let correctPassword = "Geheim123";

if (password === correctPassword) {
    console.log("Zugang erlaubt");
} else {
    console.log("Zugang verweigert");
}