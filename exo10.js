let inventaire = ["pc", "manette", "clavier", "casque", "souris"]
inventaire.push("chaise", "tapis")  

let firstElement = inventaire.shift(); // supprime le premier élément du tableau

inventaire.forEach(article => console.log(article));