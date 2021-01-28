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

function remove(product) {
    let basket = initBasket();
    let productFind = basket.find(basketProduct => basketProduct.idItem == product.idItem);

    if (productFind > 1) {
        productFind.quantity--;
    } else {
        basket = basket.filter(basketProduct => basketProduct.idItem != product.idItem);
    }
    localStorage.setItem("basket", JSON.stringify(basket));

}
