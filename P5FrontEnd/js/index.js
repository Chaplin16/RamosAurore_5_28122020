//creation des variables

// variable de recuperation où je placerai le html dans le JS
let containerProduct = document.getElementById('listProduct'); 

//variable de l url de api avec choix du produit dans config.api
var myFetch = fetch(config.host + config.api)

// fonction generique (affichage de tous les produits))
function showProduct(product) { 
// je recupere l url où j y rajoute l id de la peluche cliquée
    let url = "productDetail.html?id=" + product.id
    // je rajoute le HTML dans le js avec les variables de toutes les propriétés
    containerProduct.innerHTML += 
    `<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
    <div class="card border-warning border-5 m-3">
        <div class="card-body ">
            <h2 class="card-title">${product.name}</h2>    
            <a href= ${url}>
                <figure id="figure">
                    <p id="erreur"></p>
                    <img src=${product.imageUrl} class="img-fluid rounded align-items-center" alt="ours en peluche">
                </figure>
                </a>    
                <p class="text-right font-weight-bold">Prix:${product.price / 100}€</p>
                <img src="img/star-solid.jpg"/>
                <img src="img/star-solid.jpg"/>
                <img src="img/star-solid.jpg"/>
                <img src="img/star-solid.jpg"/>
                <img src="img/star-solid.jpg"/>
                
                <input type="submit" id="btnListProduct" type="button" onclick="window.location.href ='${url}';" class="float-right mt-sm-2 mt-md-0 btn btn-warning font-weight-bold border-dark data-id="${product.id}" data-image="${product.imageUrl}" data-name="${product.name}" data-price="${product.price /100}" value="détails"/>

        </div>
    </div>
    </div>`;
    }

// requete vers l api
myFetch.then(function (response) {
    //premiere promesse avec la reponse json
    return response.json()
})
    //promesse de la reponse json a qui je demande la liste des produits
    .then(function(listProductData) {

//j utilise la boucle for of pour recuperer un produit de la liste
        for (let product of listProductData) {
// je lui cree teddy sur le modele du constructor TeddyBear
            let teddy = new TeddyBears(product);
// j appelle ma fonction  en lui passant en parametre teddy            
        showProduct(teddy);
        }

    })       
//le retour en cas de non connection au serveur 
    .catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });

//j affiche la quantité d articles du panier de commande 
let quantityInCart = document.getElementById("quantity-in-cart"); 
calculQuantity();


