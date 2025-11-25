const NOM_DU_MAGASIN = "PixelBay";
let jeux_Vendus = 101

if (jeux_Vendus > 100) {
    console.log(NOM_DU_MAGASIN + "C'est le jour de la grande promotion !");
} else if (jeux_Vendus >=50 && jeux_Vendus <=100){
    console.log(NOM_DU_MAGASIN + "Il y aura une réorganisation des espaces de ventes !");
} else {
    console.log(NOM_DU_MAGASIN + "On lance la campagne de publicité !");
}