function calculQuantity() {
    //AFFICHER LA QUANTITE DE PRODUIT A ACHETER DANS LE HEADER
        //variable de l endroit où je recupere les quantités
        let quantityInCart = document.getElementById("quantity-in-cart"); 

        totalQuantity = localStorage.getItem("totalQuantity");    
        if (totalQuantity != null) {
            quantityInCart.innerHTML = `<span>${totalQuantity}</span> articles`;
        } else {
            quantityInCart.innerHTML =`0 article`
        } 
}