# PixelBay

## Objectifs : 

Ce projet a pour objectif de s'entrainer sur JavaScript.

## Prérequis

- nodejs 22.12.2
- npm 10.0.0

Pour initialiser le projet vous pouvez executer la commande `npm init -y`et `npm install readline-Sync`

## Créer un timer
```js console.log("Document loaded");

console.log("Début du programme");

// Tourne en arrière plan de manière  asynchrone
setTimeout(function () {
  const items = document.querySelectorAll(".toto span");

  console.log(items);

  // items[8].textContent= "Loulou"

  items.forEach((elmt) => {
    console.log(elmt.className);

    // Structure if

    //    if (elmt.className != "item active") {
    //     elmt.textContent= "ABC"
    //     elmt.style.fontSize= "48px"
    //    }

    // Alternative avec "Ternary operator"

    elmt.innerHTML =
      elmt.className != "item active" ? "<strong>ABC</strong>" : elmt.className;
    elmt.style.fontSize =
      elmt.className != "item active" ? "48px" : elmt.style.fontSize;
  });

  console.log("message : Tâche asynchrone terminée !");
}, 2000);

console.log("Fin du programme");
```
score   | résultat
--- | ---
1 | 2
2 | 4

[ un lien](http://...) 
![ GTA6 ](pages/image.png)

