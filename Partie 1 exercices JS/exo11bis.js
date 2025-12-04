let jeu1 = {
    titre: "AC",
    sortie: 2019,
    genre: "RPG",
    score: 99,

    affichage() {
        console.log(`Titre : ${this.titre}`);
        console.log(`sortie : ${this.sortie}`);
        console.log(`genre : ${this.genre}`);
        console.log(`score : ${this.score}`);
    },

    getPopularite() {
        return (this.score * this.sortie) / 100;
    },
}

let jeu2 = {
    titre: "FAR CRY",
    sortie: 2019,
    genre: "RPG",
    score: 99,

    affichage() {
        console.log(`Titre : ${this.titre}`);
        console.log(`sortie : ${this.sortie}`);
        console.log(`genre : ${this.genre}`);
        console.log(`score : ${this.score}`);
    },

    getPopularite() {
        return (this.score * this.sortie) / 100;
    },
}

let popularite1 = jeu1.getPopularite();
let popularite2 = jeu2.getPopularite();

if (popularite1>popularite2) {
    console.log(`${jeu1.titre} est le jeu le plus populaire`);
    jeu1.affichage();
    console.log(`Popularité : ${popularite1}`);
    
} else if (popularite2>popularite1) {
    console.log(`${jeu2.titre} est le jeu le plus populaire`);
    jeu2.affichage();
    console.log(`Popularité : ${popularite1}`);
} else {
    console.log("EGALITE");
}