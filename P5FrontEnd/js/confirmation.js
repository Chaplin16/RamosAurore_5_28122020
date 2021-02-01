// PRIX
//je recupere l'emplacement du prix total de la commande
let priceOrder = document.getElementById("priceOrder");
//je recupere le prix total 
let totalOrder = localStorage.getItem("totalOrder");
priceOrder.innerHTML = `<span>${totalOrder}</span> €`;

// NUMERO DE COMMANDE
//je recupere l'emplacement du numero de commande 
let number = document.getElementById("numberOrder");
//je récupere le numéro de commande
let order = localStorage.getItem("order");
order = JSON.parse(order);
number.innerHTML += `<span>${order}</span>`;

// PRENOM
//je recupere l emplacement du prénom 
let contactName = document.getElementById("contactName");
//je recupere le prenom du client
let user = localStorage.getItem("user");
user = JSON.parse(user);
contactName.innerHTML += `<span>FELICITATIONS ${user}!!</span>`;

//je supprime le panier 
localStorage.clear(order);