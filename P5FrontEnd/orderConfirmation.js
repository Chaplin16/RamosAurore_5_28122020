// PRIX
//je recupere l'emplacement du prix total de la commande
let priceOrder = document.getElementById("priceOrder");
//je recupere le prix total 
totalOrder = localStorage.getItem("totalOrder");
priceOrder.innerHTML = `<span>${totalOrder}</span> €`;

// NUMERO DE COMMANDE
//je recupere l'emplacement du numero de commande 
let number = document.getElementById("numberOrder");

//je récupere le numéro de commande
localStorage.getItem("numberOrder", numberOrder)
number.innerHTML += `<span>${numberOrder}</span>`;



