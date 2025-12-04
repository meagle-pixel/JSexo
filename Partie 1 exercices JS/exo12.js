function creerJeu(nom, date, genre) {
  return { 
    titre: nom,
    date: date,
    genre: genre,
  };
}

let jeuModernes = [
  creerJeu("Valorant", 2020, "FPS"),
  creerJeu("GTA V", 2013, "Open World"),
  creerJeu("Clair Obscur", 2025, "JRPG"),
];

let jeuRetro = [
  creerJeu("Pacman", 1980, "rétro"),
  creerJeu("Rayman", 1995, "rétro"),
  creerJeu("Zelda", 1986, "action-aventure"),
];

function afficherListeJeux(liste) {
  liste.forEach(function (jeu) {
    console.log(
      "Titre : " +
        jeu.titre +
        " | Date : " +
        jeu.date +
        " | Genre : " +
        jeu.genre
    );
  });
}

afficherListeJeux(jeuModernes);
console.log("Moyenne années modernes :",
 Math.round(calculerMoyenneAnneesSortie(jeuModernes)) 
);

// function calculerMoyenneAnneesSortie(liste) {
//   let total = liste.reduce((acc, jeu) => {
//     return acc + jeu.date; 
//   }, 0);

//   return total / liste.length; 
// }

function calculerMoyenneAnneesSortie(liste) {
  let total = 0;
  for(let i=0; i<liste.length; i++) {
  let date = liste[i].date;
    console.log("lancement de la fonction for");
    console.log(date);
    total = date + total;
  }
  return total / liste.length;
}

console.log(calculerMoyenneAnneesSortie(jeuModernes));
 
// afficherListeJeux(jeuRetro);

// console.log("Moyenne années rétro :", calculerMoyenneAnneesSortie(jeuRetro));
