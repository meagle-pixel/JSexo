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
        " | Genre :" +
        jeu.genre
    );
  });
}

afficherListeJeux(jeuModernes);
console.log("Moyenne années modernes :", calculerMoyenneAnneesSortie(jeuModernes));
afficherListeJeux(jeuRetro);

function calculerMoyenneAnneesSortie(liste) {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.date;
  const result = liste.reduce(reducer,0);
  return result / liste.length;
}

console.log("Moyenne années rétro :", calculerMoyenneAnneesSortie(jeuRetro));
