let x = 5;
let y = 8;
let temperature = -5;
let distance = 460;

let distanceBetweenBucarestAndConstanta = 300;

//number
let currentWeek = 5;
//string
let myName = "Ionut";
//boolean (true /false)
let isAdmin = true;

//Exerciti
//1
let userName = "Cioaza";
let myAge = 34;
let hasPaidPlan = false;

//operatori aritmetici
let z = x + y;
console.log(z);
console.log(myName);

//2

let productPrice = 100;
let tva = 19;
let totalproductPrice = productPrice + (tva * productPrice) / 100;
console.log(totalproductPrice);

//operatori de comparatie
//(mai mic) <, <=, ===, >=, > (mai mare), !== (diferit)
console.log(x < y);
console.log(x <= y);
console.log(x === y);
console.log(x >= y);
console.log(x > y);
console.log(x !== y);

//if/else
if (x < y) {
  console.log("x este mai mic decat y");
} else {
  console.log("x este mai mare decat y");
}

// 3
if (myAge < 18) {
  console.log("minor");
} else {
  console.log("major");
}

//4
let cantitateProdus = 3;
let priceProdusPerUnit = 50;
let productTotalPrice = cantitateProdus * priceProdusPerUnit;
let numeProdus = "Laptop";

if (cantitateProdus === 0) {
  console.log(`Selecteaza minim o unuiate din produs${numeProdus}`);
} else {
  console.log(
    `Comanda poate fi plasata. Ai comandat ${cantitateProdus}, 
    iar toalul este de ${productTotalPrice} lei`
  );
}

// nu inteleg cum este cu ${} , ||, &&, !

// 5
let numberOfGoodIdeas = 1;

if (numberOfGoodIdeas === 0) {
  console.log("fail");
}
if (numberOfGoodIdeas === 1 || numberOfGoodIdeas === 2) {
  console.log("publish");
}
if (numberOfGoodIdeas > 2) {
  console.log("series");
}

//6
let hoursOfSleep = 4;

if (hoursOfSleep < 5) {
  console.log("Too little sleep! You're a zombie today.");
}
if (hoursOfSleep >= 5 && hoursOfSleep <= 7) {
  console.log("Not bad, but you might need some coffee.");
}
if (hoursOfSleep > 7) {
  console.log("Perfect! You're well-rested and ready to go!");
}

//1) sa se creeze o variabila care contine temperatura curenta
// ( poate fi un numar de la 1 la 50 ).
// daca temperatura e negativa sa se afiseze in consola
// "Freezing! Wear a heavy coat.",
// daca temperatura e undeva intre 0 si 20 sa se afiseze
// "Cool weather, better take a jacket.",
// daca temperatura este peste 20 sa se afiseze
// "Cool weather, better take a jacket."

let currentTemperature = 15;
if (currentTemperature < 0) {
  console.log("Freezing! Wear a heavy coat.");
}
if (currentTemperature >= 0 && currentTemperature <= 20) {
  console.log("Cool weather, better take a jacket.");
}
if (currentTemperature > 20) {
  console.log("Cool weather, better take a jacket.");
}
//2) sa se creeze o variabila care contine nota unui student
// ( de la 1 la 100 ) . daca nota e sub 50 sa se afiseze
// "Failed... better luck next time.",
// daca este intre 50 si 75 sa se afiseze Passed! Good job.",
// altfel "Excellent! You're a star!"

let notaStudentului = 85;
if (notaStudentului < 50) {
  console.log("Failed... better luck next time.");
}
if (notaStudentului >= 50 && notaStudentului <= 75) {
  console.log("Passed! Good job.");
}
if (notaStudentului > 75) {
  console.log("Excellent! You're a star!");
}

//Verifică dacă un număr este pozitiv, negativ sau zero:

let num = prompt("Introdu un număr:");
num = Number(num);

if (num > 0) {
  console.log("Pozitiv");
} else if (num < 0) {
  console.log("Negativ");
} else {
  console.log("Este zero");
}

//Creează variabile pentru numele tău și vârsta ta și
// afișează-le într-un mesaj, de exemplu:
// "Salut, eu sunt [numele] și am [vârsta] ani".

const nume = "Alex";
const varsta = 25;

console.log(`Salut, eu sunt ${nume} și am ${varsta} ani`);

//Folosește o variabilă pentru un număr și
// verifică dacă este par sau impar,
// apoi afișează rezultatul.

const numar = 7;

if (numar % 2 === 0) {
  console.log(`${numar} este par`);
} else {
  console.log(`${numar} este impar`);
}
