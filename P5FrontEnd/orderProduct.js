//recuperer les infos de la commande 
const panier = JSON.parse(localStorage.getItem("basket"));

//je recupere le lieu d inplantation
let cartTableBody = document.getElementById("cart-tablebody");
cartTableBody.innerHTML ="";

//Condition pour afficher le panier
if (panier) {
    ligneTableau(); 
    } else {
    alert("le panier est vide")
}

 //Boucle d affichage des lignes de commande 
function ligneTableau() {
let total = 0;
//les lignes de commande  
    panier.forEach((basket) => {
    total += basket.price * basket.quantity;   
    cartTableBody.innerHTML += `
            <tr class="bg-white">
            <td>${basket.firstName}</td>
            <td class="text-left pl-5">${basket.price}€</td>
            <td>${basket.color}</td>
            <td id="resultChoiseQuantity" class="text-left pl-5">${basket.quantity}</td>
            <td><img id="trash" class="ml-4 h-75" src="trash-can_38501.png"></td>
            <td class="text-center">${total}€</td>
          </tr>`;  
    }); 
// la ligne des totaux
    cartTableBody.innerHTML += 
          `<tr class="bg-white">
            <td>Prix total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="text-center">${total}€</td>
          </tr>`;  
};




 



// //quand on clique sur la poubelle, la ligne s efface 
// let trash = document.getElementById("trash");


// // afficher la quantite total d articles voulues
// let quantityInCart = document.getElementById("quantity-in-cart");

///////////////////////////////////////////
