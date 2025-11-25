const Name = "PixelBay";
let stock = 500;
let moy_prix = 15;
console.log("La boutique s'appelle " + Name);
console.log("Le stock de jeux vidéos au début est de " + stock);
let quant_vendu = stock * 0.3;
console.log("Après les 30% de jeux vendus, il n'en reste désormais plus que " + quant_vendu); 
let money_win = moy_prix * quant_vendu;
console.log("Le CA de ces ventes est de " + money_win + " €.");