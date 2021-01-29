
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

// fonction pour supprimer une peluche   
let trash = document.getElementsByClassName("trash");
 for (let btn of trash) {
    btn.addEventListener('click', function () {
        let idItem = this.dataset.id;
        remove({ idItem: idItem });
        let quantityToUpdate= document.querySelector(`td.quantity[data-id="${idItem}"]`);
        if (quantityToUpdate.innerHTML > 1){
            quantityToUpdate.innerHTML = parseInt(quantityToUpdate.innerHTML) - 1;
        }else {
            quantityToUpdate.parentElement.remove();
 
        }
        window.location.reload();
    });
    
};
//Boucle d affichage des lignes de commande 
function ligneTableau() {
    let total = 0;
    let totalOrder = 0;
    let quantityInCart = document.getElementById("quantity-in-cart");
    let totalQuantity = 0;

    //les lignes de commande  
    panier.forEach((product) => {
        total = product.price * product.quantity;
        totalOrder += total
        totalQuantity += parseInt(product.quantity);

        cartTableBody.innerHTML += `
            <tr class="bg-white">
                <td><img class= "img-rounded" src="${product.imageUrl}" width="90"</td>
                <td class="align-middle">${product.firstName}</td>
                <td class="text-left pl-5 align-middle">${product.price}€</td>
                <td class="align-middle">${product.color}</td>
                <td class="quantity text-left pl-5 align-middle" data-id="${product.idItem}">${product.quantity}</td>
                <td>       
                <img data-id="${product.idItem}" class="trash ml-4 h-75 mt-2" src="trash-can_38501.png" alt="image d'une poubelle"> 
                </td>
                <td id="calculPriceLine" class="text-center align-middle">${total}€</td>
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
                <td></td>
                <td class="text-center font-weight-bold">${totalOrder}€</td>
            </tr>`;

  //quantite du panier affiché dans le header
    quantityInCart.innerHTML = `<span>${totalQuantity}</span> articles`;
    localStorage.setItem("qtt", totalQuantity);
    localStorage.setItem("totalOrder", totalOrder);
};


