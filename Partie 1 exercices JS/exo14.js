
let collection = [
  {
    titre: "Valorant",
    anneeSortie: 2020,
    genre: "FPS",
    scores: [92, 91, 94, 90, 93],
  },

  {
    titre: "Space Adventure",
    anneeSortie: 1984,
    genre: "Aventure",
    scores: [85, 87, 90, 78, 88],
  },

  {
    titre: "Candy Crush",
    anneeSortie: 1994,
    genre: "Arcade",
    scores: [70, 65, 80, 78, 74],
  },

  {
    titre: "Indiana Jones",
    anneeSortie: 2006,
    genre: "Aventure",
    scores: [88, 81, 71, 66, 84],
  },
];


function filtrerParAnnee(collection, annee) {
  return collection.filter(function(jeu) {
    return jeu.anneeSortie>annee;
  });
}

function filtrerParGenre (collection, genre) {
  return collection.filter(function(jeu){
    return jeu.genre === genre;
  })
};

console.log(`Jeux sortis après les années 2000 : `);
console.log(filtrerParAnnee(collection, 2000));
console.log("Jeux de genre 'Aventure' :");
console.log(filtrerParGenre(collection, "Aventure"));






// let newArray = array.filter(function (tabElement) {
//   return tabElement.anneeSortie >= 2000 && tabElement.genre === "Aventure";
// });

// console.log(newArray);


