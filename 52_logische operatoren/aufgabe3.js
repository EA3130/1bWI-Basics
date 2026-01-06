let gradenumber = parseInt(prompt("enter ur grade number"));
let attendance = parseInt(prompt("enter ur attendance percentage"));
let extracredit = parseInt(prompt("enter ur extracredit points"));

if ((gradenumber >= 80 && attendance >= 90) || extracredit >= 5) {
    console.log("Eligible for adnvanced exam");
} else {
    console.log("Not eligible for advanced exam");
}