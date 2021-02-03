//recuperer les infos de la commande 
const basket = JSON.parse(localStorage.getItem("basket"));

//je recupere le lieu d inplantation
let cartTableBody = document.getElementById("cart-tablebody");
cartTableBody.innerHTML = "";
let totalQuantity = 0;

//Condition pour afficher le panier
if (basket) {
    rowTable();
} else {
    alert("le panier est vide")
}

// fonction pour supprimer une peluche   
let trash = document.getElementsByClassName("trash");

//j initialise le bouton de la poubelle sur la ligne de commande
for (let btn of trash) {
    btn.addEventListener('click', function () {
        let idItem = this.dataset.id;
        removeBasket({ idItem: idItem });
        let quantityToUpdate= document.querySelector(`td.quantity[data-id="${idItem}"]`);
        if (quantityToUpdate.innerHTML > 1){
            quantityToUpdate.innerHTML = parseInt(quantityToUpdate.innerHTML) - 1;
        }else {
            quantityToUpdate.parentElement.remove();
 
        }
        window.location.reload();
    });
    
};
//j affiche chaque ligne de commande 
function rowTable() {
    let total = 0;
    let totalOrder = 0;
    let quantityInCart = document.getElementById("quantity-in-cart");
    let totalQuantity = 0;

    basket.forEach((product) => {
    //le prix sur chaque ligne    
        total = product.price * product.quantity;

    //le prix total de la commmande
        totalOrder += total

    // j'additionne les quantités des memes articles    
        totalQuantity += parseInt(product.quantity);

    // le html d'une ligne de commande
        cartTableBody.innerHTML += `
            <tr class="bg-white">
                <td class="d-none d-md-block">
                    <img class="d-none d-md-block ml-lg-5 img-rounded" src="${product.imageUrl}" width="90"
                </td>
                <td class="align-middle pr-0 ml-1">${product.firstName}</td>
                <td class="text-left pl-4 align-middle">${product.price}€</td>
                <td class="align-middle">${product.color}</td>
                <td class="quantity text-left pl-5 align-middle" data-id="${product.idItem}">${product.quantity}</td>
                </td>
                <td id="calculPriceLine" class="text-center align-middle">${total}€</td>
                <td>       
                <img data-id="${product.idItem}" role= "button" class ="trash ml-4 h-75 mt-2 pl-0" src="img/trash-can_38501.png" alt="image d'une poubelle"> 
                
            </tr>`;
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


      

