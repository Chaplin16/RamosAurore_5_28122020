//creation des variables

// variable où je placerai le html en js
let containerProduct = document.getElementById('listProduct'); 
//variable de l url de api avec choix du produit dans config.api
var myFetch = fetch(config.host + config.api)



// fonction generique (affichage de tous les produits))
function showProduct(product) { 
// je recupere l url où j y rajoute l id de la peluche cliquée
    let url = "productDetail.html?id=" + product.id
// je rajoute le HTML dans le js avec les variables de toutes les propriétés
    containerProduct.innerHTML += 
    `<div class="col-12 col-lg-4">
    <div class="card border-warning border-5 m-4">
        <div class="card-body ">
            <h2 class="card-title">${product.name}</h2>    
            <a href= ${url}>
                <figure id="figure">
                    <p id="erreur"></p>
                    <img src=${product.imageUrl} class="img-fluid rounded align-items-center" alt="ours en peluche">
                </figure>
                </a>    
                <p class="text-right font-weight-bold">Prix:${product.price / 100}€</p>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/>
            
            <button onclick="window.location.href ="#" type="button" value="Commander" class="btn btn-warning font-weight-bold border-dark  text-right float-right">Commander</button>
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
// j appelle ma fonction de la ligne 6 en lui passant en parametre teddy            
        showProduct(teddy);
        }

    })       
//le retour en cas de non connection au serveur 
//.catch(function(err) {
 //   console.log('Fetch problem: ' + err.message);
//});

