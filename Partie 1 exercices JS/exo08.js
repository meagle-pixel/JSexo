
let prixJeu = 50;

function promoEte(prix) {
    return prix*0.8
}

function promoHiver(prix) {
    return prix*0.7
}

function promoSpeciale(prix, pourcentage) {
    return prix * (1 - pourcentage / 100)
}

console.log("Prix normal :",prixJeu, "€");
console.log("Prix après promo d'été :", promoEte(prixJeu), "€");
console.log("Prix après promo d'hiver :", promoHiver(prixJeu), "€");
console.log("Prix après promo spéciale :", promoSpeciale(prixJeu,15), "€");

