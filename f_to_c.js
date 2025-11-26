import readlineSync from 'readline-sync';

const temperature = Number(readlineSync.question('Quel temperature ? nombre : '));

console.log(typeof temperature);


function fToC( F, symbol ){
  if (typeof F !== "number") {
    console.log("ERREUR");
  } else {
    console.log( `${(F - 32) * 5 / 9} ${symbol}` );
  }
}

// Mes tests de dev
fToC(98.6);
fToC(200);
fToC(300);

// Utilisateur
fToC(temperature, '°');
 


// MON CODE
const testValue = 100;
const testValue2 = "ABC";

function fToC (F) {
    
    if (typeof F !=="number") {
        console.log("Veillez entrer un nombre !");
    } else {
        console.log((F - 32) * 5/9);
    }
}


fToC(98.6);
fToC(200);
fToC(300);
fToC(testValue);
fToC(testValue2);





