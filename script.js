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
