let jeu1 = {
  titre: "Assassin's Creed",
  sortie: 2015,
  genre: "RPG",
  score: 75,

  affichage() {
    console.log(`Titre : ${this.titre}`);
    console.log(`Sortie : ${this.sortie}`);
    console.log(`Genre : ${this.genre}`);
    console.log(`Score : ${this.score}`);
  },

  getPopularite() {
    return (this.score * this.sortie) / 100;
  },
};

let jeu2 = {
  titre: "GTA",
  sortie: 2013,
  genre: "RPG",
  score: 90,

  affichage() {
    console.log(`Titre : ${this.titre}`);
    console.log(`Sortie : ${this.sortie}`);
    console.log(`Genre : ${this.genre}`);
    console.log(`Score : ${this.score}`);
  },

  getPopularite() {
    return (this.score * this.sortie) / 100;
  },
};

let popularite1 = jeu1.getPopularite();
let popularite2 = jeu2.getPopularite();

if (popularite1 > popularite2) {
  console.log(`Le jeu le plus populaire est ${jeu1.titre}`);
  jeu1.affichage();
  console.log(`Popularité : ${popularite1}`);
} else {
  console.log(`Le jeu le plus populaire est ${jeu2.titre}`);
  jeu2.affichage();
  console.log(`Popularité : ${popularite2}`);
}
