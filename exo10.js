let inventaire = ["pc", "manette", "clavier", "casque", "souris"]
inventaire.push("chaise", "tapis")

let firstElement = inventaire.shift();

inventaire.forEach(article => console.log(article));