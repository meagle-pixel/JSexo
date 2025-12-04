function creerJeu(titre, sortie, genre) {
  return {
    titre: titre,
    sortie: sortie,
    genre: genre,
  };
}

function afficherListeJeux(liste) {
  liste.forEach((jeu) => {
    console.log(`Titre : ${jeu.titre}, Année : ${jeu.anneeSortie}, Genre : ${jeu.genre}`);
  });
}

function calculerMoyenneAnneesSortie(liste) {
    const total = liste.reduce((acc,jeu)=> acc + jeu.sortie, 0);
    return total / liste.length;
}

let jeuxRetro = [
    creerJeu("Space Adventure", 1984, "Aventure"),
    creerJeu("Prince of Persia", 1989, "Plateforme"),
    creerJeu("Street Fighter", 1991, "Combat"),
];

let jeuxModernes = [
    creerJeu("GTA V", 2013, "Open World"),
    creerJeu("God of War", 2018, "Action"),
    creerJeu("Elden Ring", 2022, "RPG"),
];

