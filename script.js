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

//////////////////////////////

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

const nume = "Traian";
const varsta = 34;

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

//Sumă a trei numere
//Creează trei variabile cu valori numerice și afișează suma lor.

const numar1 = 5;
const numar2 = 8;
const numar3 = 12;

const suma = numar1 + numar2 + numar3;

console.log(`Suma celor trei numere este: ${suma}`);

//Verificare vârsta și permisul de conducere
//Scrie un cod care verifică dacă o persoană are peste 18 ani
// ** și ** are permis de conducere.

const VarsaPersoanei = 20;
const arePermis = true;

if (VarsaPersoanei > 18 && arePermis) {
  console.log("Persoana poate conduce.");
} else {
  console.log("Persoana nu poate conduce.");
}

//Validare parole
//Verifică dacă o parolă respectă două condiții:
// are cel puțin 8 caractere ** și **
// conține cel puțin o literă mare.

const parola = "Abcdefgh";
const itIsLong = parola.length >= 8;
const areLiteraMare = /[A-Z]/.test(parola);

if (itIsLong && areLiteraMare) {
  console.log("Parola este validă.");
} else {
  console.log("Parola nu este validă.");
}

// Numere pozitive și pare
// Verifică dacă un număr este pozitiv ** și ** par.

const numarPozitiv = 10;

/* Exercitiu 1 
Sa se creeze o functie care are 2 parametrii ( x, y ) reprezentand 2 numere.
Functia sa afiseze in consola diferenta lor*/

let diferenta = (x, y) => {
  console.log(x - y);
};

diferenta(7, 9);

/* Exercitiu 2
Sa se creeze o functie care are 2 parametrii ( x, y ) reprezentand 2 numere.
Functia sa afiseze in consola produsul lor*/

let produsul = (x, y) => {
  console.log(x * y);
};

produsul(14, 5);

/* Exercitiu 3
Sa se creeze o functie care are 2 parametrii ( x, y ) reprezentand 2 numere.
Functia sa afiseze in consola impartirea lor*/

let impartirea = (x, y) => {
  console.log(x / y);
};

impartirea(11, 9);

/* Exercitiu 4
Sa se creeze o funcție care are un parametru ( varstaMea ) reprezentând un număr. Funcția sa afișeze în consola “Varsta mea este “ + varstaMea.*/

let afiseazaVarstaMea = (varstaMea) => {
  console.log("Varsta mea este " + varstaMea);
};

afiseazaVarstaMea(19);

// let varstaMea = "32";
// console.log("Varsta mea este " + varstaMea);

/* Exercitiu 5
Sa se creeze o funcție care are un parametru ( numeleMeu ) reprezentând un string. Funcția sa afișeze în consola “Numele meu este “ + numeleMeu.*/

let afiseazaNumeleMeu = (numeleMeu) => {
  console.log("Numele meu este " + numeleMeu);
};

afiseazaNumeleMeu("ABc");

//const name = "numele Meu Este ";
//console.log(name + "Ionut");

/* Exercitiu 6
Sa se creeze o functie care are 2 parametrii ( numeleMeu, varstaMea ) reprezentand un string și un număr.
Functia sa afiseze in consola un string construit din cei 2 parametrii ca în exemplu:
Dacă funcția este apelată cu argumentele “Andrei” și 30, funcția sa afișeze în consola “Numele meu este Andrei și am 30 de ani”.*/

let afiseazaNumeleMeuSiVarsta = (numeleMeu, varstaMea) => {
  console.log(
    "Numele meu este " + numeleMeu + " și am " + varstaMea + " de ani"
  );
};

afiseazaNumeleMeuSiVarsta("Ionut", 32);

//const name = "Andrei";
//const age = 30;
//const greeting = "numele mau este " + name + " si am " + age + " ani";
//console.log (greeting);

/* Exercitiu 7 
Sa se creeze o funcție care are un parametru ( numeleMeu ) reprezentând un string. Funcția sa afișeze în consola “Numele meu are “ + numărul de caractere al numelui + “ caractere “.*/

let afiseazaNumarulDeCaractereAleNumeluiMeu = (numeleMeu) => {
  console.log("Numele meu are " + numeleMeu.length + " caractere");
};

afiseazaNumarulDeCaractereAleNumeluiMeu("Ionut");

/*const name = "Ionut";
let lenght = 5;
//let lenght = name.lenght;
console.log("Numele meu are " + name.length + " caractere")*/

// Exercitiu 1: Verificare dacă un număr este pozitiv sau negativ
//Scrie un cod care verifică dacă un număr este
// mai mare ca 0 ** sau ** mai mic ca 0.

let numberToVerify = -3;

if (numberToVerify > 0) {
  console.log("Numarul este pozitiv");
}
if (numberToVerify < 0) {
  console.log("Numarul este negativ");
}

const number = -5;

if (number > 0 || number < 0) {
  console.log("Numărul este diferit de zero");
} else {
  console.log("Numărul este zero");
}

//Exercitiu 2: Validare introducere
//Verifică dacă o variabilă conține fie 'da' ** sau ** 'nu'.

let userImput = "da";

if (raspuns === "da" || raspuns === "nu") {
  console.log("Răspuns valid");
} else {
  console.log("Răspuns invalid");
}

//Exercitiu 3: Trestare dacă e weekend sau e după ora 18
//Verifică dacă ziua e sâmbătă sau duminică ** sau **
// dacă ora e după 18:00.

const zi = "vineri";
const ora = 19;

if (zi === "sâmbătă" || zi === "duminică" || ora > 18) {
  console.log("E timpul liber!");
} else {
  console.log("E ora de muncă.");
}

//Exercitiu 4: Verificare dacă cel puțin una dintre condiții e adevărată
//Scrie un cod care verifică dacă o persoană are peste
// 50 de ani ** sau ** este profesor.

const teacherAge = 68;
const esteProfesor = false;

if (varsta > 50 || esteProfesor) {
  console.log("Ești fie peste 50 de ani, fie profesor.");
} else {
  console.log("Nu ești nici peste 50, nici profesor.");
}

//Exercitiu 5: Verificare metode de autentificare
//Verifică dacă trebuie să te autentifici fie cu
// emailul ** sau ** cu numărul de telefon.

const emailul = "cioazai@yahoo.com";
const telefonul = "0748845769";

if (emailul !== "" || telefonul !== "") {
  console.log("successfuluAthentication");
} else {
  console.log("theFieldUsRequiredToBeCompleted..");
}

//Exercitiu 6: Verifică dacă poți merge afară
//Ești liber dacă e ploaie ** sau ** dacă ai mop și prosop,
//  pentru a șterge apa.

const ploua = true;
const areMop = false;
const areProsop = true;

if (ploua || (areMop && areProsop)) {
  console.log("Poți merge afară");
} else {
  console.log("Trebuie să stai înăuntru");
}

//Exercitiu 1: Sumă simplă a două variabile
//Creează două variabile cu valori numerice și afișează suma lor.

const numarUnu = 10;
const numarDoi = 5;

const sumaTotal = numar1 + numar2;
console.log("Suma este: " + suma);
