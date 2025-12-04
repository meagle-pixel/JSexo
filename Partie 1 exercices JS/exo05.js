let stockCible = 100;
let jeuxEnStock = 0;
let nbLiv = 0;

while (jeuxEnStock < stockCible) {
    (jeuxEnStock += 5);
    (nbLiv ++);
}
console.log(`Une fois stock ciblé atteint, il y aura eu ${nbLiv} livraisons effectuées`);