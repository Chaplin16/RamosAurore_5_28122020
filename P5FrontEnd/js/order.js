//recuperer les infos de la commande 
const basket = JSON.parse(localStorage.getItem("basket"));

//je recupere le lieu d inplantation
let trash = document.getElementsByClassName("trash");
let cartTableBody = document.getElementById("cart-tablebody");

//j affecte les variables
cartTableBody.innerHTML = "";
let totalQuantity = 0;
let total = 0;
let totalOrder = 0;

//function pour afficher une ligne de comande
function displayOrderLines(product) {
    // le html d'une ligne de commande
    cartTableBody.innerHTML += `
        <tr class="bg-white">
            <td class="d-none d-md-block">
                <img class="d-none d-md-block ml-lg-5 img-rounded" src="${product.imageUrl}" width="90" alt="peluche"/>
            </td>
            <td class="align-middle pr-0 ml-1">${product.firstName}</td>
            <td class="text-left pl-4 align-middle">${product.price}€</td>
            <td class="align-middle">${product.color}</td>
            <td class="quantity text-left pl-5 align-middle" data-id="${product.idItem}">${product.quantity}</td>
            </td>
            <td id="calculPriceLine" class="text-center align-middle">${total}€</td>
            <td>       
                <img data-id="${product.idItem}" role= "button" class ="trash ml-4 h-75 mt-2 pl-0" src="img/trash-can_38501.png" alt="image d'une poubelle"> 
            </td>
        </tr>`;
}

//function pour calculer les pric total de la ligne et la prix total de la comande 
function calculPrice(product) {
    //calcul la quantite par ligne
    total = product.price * product.quantity;
    //calcul la quantite total 
    totalOrder += total
}

//Condition pour afficher le panier
if (basket) {
    rowTable();
} else {
    alert("le panier est vide")
}

//j initialise le bouton de la poubelle sur la ligne de commande
for (let btn of trash) {
    btn.addEventListener('click', function () {
        let idItem = this.dataset.id;
        removeBasket({ idItem: idItem });
        let quantityToUpdate = document.querySelector(`td.quantity[data-id="${idItem}"]`);
        if (quantityToUpdate.innerHTML > 1) {
            quantityToUpdate.innerHTML = parseInt(quantityToUpdate.innerHTML) - 1;
        } else {
            quantityToUpdate.parentElement.remove();

        }
        window.location.reload();
    });

};

//j affiche chaque ligne de commande 
function rowTable() {
    basket.forEach((product) => {
        //j appelle la function pour calculer les prix
        calculPrice(product);
        // j'additionne les quantités des articles    
        totalQuantity += parseInt(product.quantity);
        //j appelle la function pour afficher la ligne de commande
        displayOrderLines(product);
    });
    // le html de la ligne des totaux
    cartTableBody.innerHTML +=
        `<tr class="bg-light">
            <td class="font-weight-bold pl-lg-5">Prix total</td>
            <td class="d-none d-md-block"></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="text-center font-weight-bold">${totalOrder}€</td>
            <td></td>
        </tr>`;
    //nombre d 'articles du panier affiché dans les headers
    localStorage.setItem("totalQuantity", totalQuantity);
    localStorage.setItem("totalOrder", totalOrder);
    calculQuantity();
};




