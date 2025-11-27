let codeSecret = "arme";

switch (codeSecret) {
  case "Alpha":
    console.log("Lancer la promotion de la semaine !");
    break;
  case "Bravo":
    console.log("Réorganiser la section des jeux rétro !");
    break;
  case "Charlie":
    console.log(
      "Préparer la zone de démonstration pour les nouveaux arrivages !"
    );
    break;
  case "Delta":
    console.log("Vérifier l'inventaire des accessoires !");
  default:
    console.log("Il n'y a rien pour vous !");
}