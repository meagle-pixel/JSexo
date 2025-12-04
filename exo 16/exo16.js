const CAPACITE_DE_LETAGERE = 10;
let jeuxEnStock = Number(
  prompt("Combien de jeux vidéo avez-vous reçus en stock aujourd'hui ?")
);

let etageresPleines = Math.floor(jeuxEnStock / CAPACITE_DE_LETAGERE);
let jeuxRestants = jeuxEnStock % CAPACITE_DE_LETAGERE;

if (jeuxEnStock === 0) {
  console.log("Aucun jeu n'est arrivé aujourd'hui");
} else {
  console.log("Nombre d'étagères complètement remplies :", etageresPleines);
  console.log("Nombre de jeux restants :", jeuxRestants);
}
