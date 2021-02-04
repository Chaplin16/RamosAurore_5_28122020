//FONCTIONS UTILISEES POUR LE LOCAL STORAGE
function initBasket() {
    let basket = localStorage.getItem("basket");
    if (basket != null) {
        return JSON.parse(basket)
    } else {
        return [];
    }
};

function addBasket(product) {
    let basket = initBasket();
    let productFind = basket.find(basketProduct => basketProduct.idItem == product.idItem);

    if (productFind != undefined) {
        productFind.quantity = parseInt(productFind.quantity) + parseInt(product.quantity);
    } else {
        basket.push(product);
    }
    localStorage.setItem("basket", JSON.stringify(basket));
};

//function pour vider la ligne du panier ou seulement la quantite si le produit est existant dans le panier
function removeBasket(product) {
    let basket = initBasket();
    let productFind = basket.find(basketProduct => basketProduct.idItem == product.idItem);

    if (productFind.quantity > 1) {
        productFind.quantity--;
    } else {
        basket = basket.filter(basketProduct => basketProduct.idItem != product.idItem);
    }
    localStorage.setItem("basket", JSON.stringify(basket));
}

//function pour verifier si le panier contient des articles
function basketIsRight() {  
    if(basket.length <= 0 || basket == null) {
            alert("Il n'y a pas d'article dans votre panier!");
            return false
        }else {
            console.log("le panier n'est pas vide");
            return true
        }
}