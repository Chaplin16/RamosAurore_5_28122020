
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
                <td><img class= "img-rounded" src="${product.imageUrl}" width="90"</td>
                <td class="align-middle">${product.firstName}</td>
                <td class="text-left pl-5 align-middle">${product.price}€</td>
                <td class="align-middle">${product.color}</td>
                <td class="quantity text-left pl-5 align-middle" data-id="${product.idItem}">${product.quantity}</td>
                <td>       
                <img data-id="${product.idItem}" role= "button" class="trash ml-4 h-75 mt-2" src="img/trash-can_38501.png" alt="image d'une poubelle"> 
                </td>
                <td id="calculPriceLine" class="text-center align-middle">${total}€</td>
            </tr>`;
    });

    // le html de la ligne des totaux
        cartTableBody.innerHTML +=
            `<tr class="bg-light">
                <td class="font-weight-bold">Prix total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="text-center font-weight-bold">${totalOrder}€</td>
            </tr>`;

  //nombre d 'articles du panier affiché dans les headers
    localStorage.setItem("totalQuantity", totalQuantity);
    localStorage.setItem("totalOrder", totalOrder);

    if (totalQuantity != null) {
        quantityInCart.innerHTML = `<span>${totalQuantity}</span> articles`;
    } else {
        quantityInCart.innerHTML =`0 article`
    }
    
};

////////////////////////////////////////////////////////

//function pour verifier si le panier contient des articles
function basketIsRight() {  
    if(basket.length < 0 || basket == null) {
            alert("Il n'y a pas d'article dans votre panier!");
            return false
        }else {
            console.log("le panier n'est pas vide");
            return true
        }
    }
            
//je recupere l'emplacement du bouton
let btnSubmit = document.getElementById("btnSubmit");
 
//je cree le onclick sur le bouton
btnSubmit.addEventListener("click", function (event) {
    document.getElementById("form").reportValidity();
    event.preventDefault();
//verification du panier 
    if(basketIsRight() == true) {  
// je cree un objet avec les valeurs que je recupere par les id
        let contact = {
                'firstName': document.getElementById("userName").value,
                'lastName': document.getElementById("userLastName").value,
                'address': document.getElementById("userAdress").value,
                'email': document.getElementById("userEmail").value,
                'city': document.getElementById("userCity").value    
        }     
//je cree un tableau reunissant les articles du panier
        let products = [];
        for(let i = 0; i < basket.length; i++){
            products.push(basket[i].idItem);
        }  

//je cree un objet avec les donnees du formulaire et le tableau 
//je fais une chaine de caractere
        let sendInfo = JSON.stringify({
            contact,
            products, 
        });

//j'envoie des donnees au serveur    
        fetch("http://localhost:3000/api/teddies/order", {
            method: "post",
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            mode:"cors",
            body: sendInfo            
        })   
            .then(function (response) {
                return response.json()
            })  
            .then(function(data) {
//j enregistre la commande

                let user = data.contact.lastName;
                let orderId = data.orderId;
//ouverture de la page de confirmation
	       		window.location.assign("confirmation.html?orderId="+orderId+"&user="+user)
            })
            //le retour en cas de non connection au serveur 
            .catch(function(err) {
            console.log('Retour info Api problem: ' + err.message);
            })
        
    } else {
        alert("votre panier est vide");
    }

});


