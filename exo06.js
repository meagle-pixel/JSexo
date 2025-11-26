let jeux = ["Space Adventure", "Castle Quest", "Mystery Island", "Robot Wars", "Jungle Journey", "Racing Rush", "Pirate's Treasure", "Alien Invasion", "Super Sports", "Haunted Mansion", "Galactic Odyssey", "Winter Wonderland"];
let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

for (let i = 0; i<mois.length && i<jeux.length; i++) {
    console.log(`jeu : ${jeux[i]} - ${mois[i]}`);
}
