
let prixJeu = 50;

function promoEte() {
    return prixJeu*0.8
}

function promoHiver() {
    return prixJeu*0.7
}

function promoSpeciale() {
    return
}

console.log("Prix normal :",prixJeu, "€");
console.log("Prix après promo d'été :", promoEte(prixJeu), "€");
console.log("Prix après promo d'hiver :", promoHiver(prixJeu), "€");
