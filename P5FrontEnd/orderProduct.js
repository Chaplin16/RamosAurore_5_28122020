
//recuperer les infos de la commande 
const panier = JSON.parse(localStorage.getItem("basket"));

//je recupere le lieu d inplantation
let cartTableBody = document.getElementById("cart-tablebody");
cartTableBody.innerHTML = "";
let totalQuantity = 0;
//Condition pour afficher le panier
if (panier) {
    ligneTableau();
} else {
    alert("le panier est vide")
}

// fonction pour supprimer une peluche   /////////////////////////A VOIR//
let trash = document.getElementById("trash");  //ligne 39
trash.addEventListener('click', function () {
    remove({ idItem: this.dataset.idItem });
    console.log(idItem)
});

//Boucle d affichage des lignes de commande 
function ligneTableau() {
    let total = 0;
    let totalOrder = 0;
    let quantityInCart = document.getElementById("quantity-in-cart");
    let totalQuantity= 0;

    //les lignes de commande  
    panier.forEach((product) => {
        total = product.price * product.quantity;
        totalOrder += total
        totalQuantity += parseInt(product.quantity);

        cartTableBody.innerHTML += `
                <tr class="bg-white">
                <td>${product.firstName}</td>
                <td class="text-left pl-5">${product.price}€</td>
                <td>${product.color}</td>
                <td id="resultChoiseQuantity" class="text-left pl-5">${product.quantity}</td>
                <td> 
                    <a href="#">  
                        <img id="trash" data-id="${product.idItem}"class="ml-4 h-75" src="trash-can_38501.png" alt="image d'une poubelle"> 
                    </a>
                </td>
                <td id="calculPriceLine" class="text-center">${total}€</td>
              </tr>`;
    });
    // la ligne des totaux
    cartTableBody.innerHTML +=
        `<tr class="bg-light">
            <td>Prix total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="text-center font-weight-bold">${totalOrder}€</td>
          </tr>`;

    quantityInCart.innerHTML = `<span>${totalQuantity}</span> articles`;        
    localStorage.setItem("qtt", totalQuantity);
};


