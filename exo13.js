let collection = [
  {
    titre: "Space Adventure",
    anneeSortie: 1984,
    score: [85, 87, 90, 78, 88],
  },
  {
    titre: "FarCry",
    anneeSortie: 1984,
    score: [90, 95, 99, 99, 94],
  },
  {
    titre: "Prince of Persia",
    anneeSortie: 1984,
    score: [59, 75, 80, 68, 74],
  },
];

function afficher(jeu) {
  console.log("*** JEU ***");
  console.log(`Titre : ${jeu.titre}`)
  console.log(`Année : ${jeu.anneeSortie}`);
  console.log(`Score : ${jeu.score}`)
}

function afficherCollection(collection) {
  console.log("*** COLLECTION DE JEUX ***");
  collection.forEach(function (jeu) {
    afficher(jeu);
  });
}

afficherCollection(collection);

function calculerMoyenneScore (jeu) {
  let total = jeu.score.reduce()
}