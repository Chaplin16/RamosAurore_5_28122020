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
let urlParams = new URL(document.location).searchParams;
let orderId = urlParams.get("orderId");

number.innerHTML += `<span>${orderId}</span>`;

// PRENOM
//je recupere l emplacement du prénom 
let contactName = document.getElementById("contactName");

//je recupere le prenom du client
let user = urlParams.get("user");
contactName.innerHTML += `<span>FELICITATIONS ${user}!!</span>`;

//je supprime le panier puisque la confirmation est retournée par l'API
localStorage.clear(orderId);