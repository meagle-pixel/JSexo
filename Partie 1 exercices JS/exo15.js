import readlineSync from "readline-sync";

function isBissextile(annee) {
  if (annee % 400 === 0) {
    return true;
  } else if (annee % 4 === 0 && annee % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

const anneeUtilisateur = readlineSync.question("Entrez une annee : ");

if (isBissextile(anneeUtilisateur)) {
console.log(`${anneeUtilisateur} est une année bissextile !`);
} else {
    console.log(`${anneeUtilisateur} n'est pas une année bissextile !`);   
}


