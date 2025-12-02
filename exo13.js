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
  console.log(`Titre : ${jeu.titre}`);
  console.log(`Année : ${jeu.anneeSortie}`);
  console.log(`Score : ${jeu.score}`);
}

function afficherCollection(collection) {
  collection.forEach(function (jeu) {
    afficher(jeu);
  });
}

function calculerMoyenneScore(jeu) {
  let total = jeu.score.reduce((acc, score) => acc + score, 0);
  let moyenne = total / jeu.score.length;
  return moyenne;
}

function calculerMoyenneScoreCollection(collection) {
  let totalMoyennes = 0;
  collection.forEach((jeu) => {
    totalMoyennes += calculerMoyenneScore(jeu);
  });

  return totalMoyennes / collection.length;
}

afficherCollection(collection);

console.log(
  "Moyenne de Space Adventure :",
  calculerMoyenneScore(collection[0])
);
console.log(
  "Moyenne générale de la collection :",
  calculerMoyenneScoreCollection(collection)
);
