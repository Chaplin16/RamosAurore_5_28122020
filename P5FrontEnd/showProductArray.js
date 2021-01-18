/* let listProductData = [];
let containerProduct = document.getElementById('listProduct');
let teddy = "";

function showProduct(product) {
    for (let product of listProductData) {
            teddy = new TeddyBears(product);
            containerProduct.innerHTML += showProduct(teddy);
        };
        
      
    return `<div class="col-12 col-lg-4">
    <div class="card border-warning border-5 m-5">
        <div id="cardProduct" class="card-body ">
            <h2 class="card-title">${product.name}</h2>
            <a href="productDetail.html" id="${product.id}>
                <figure id="figure">
                    <p id="erreur"></p>  
                    <img src=${product.imageUrl} class="img-fluid rounded align-items-center">
                </figure>
                <p class="text-right font-weight-bold">Prix:${product.price / 100}€</p>
            </a>    
        </div>
    </div>
    </div>` 
} 
fetch(config.host + config.api)

.then(response => {
    response.json().then(listProductData => {
        containerProduct.innerHTML += showProduct(teddy);
    }) 
})
.catch((err) => {
    console.log("ERREUR D AFFICHAGE");
    document.getElementById('erreur').innerHTML = " Oups! erreur d affichage :-( ";
});     
*/

/*  function showProduct(product) {
    return `<div class="col-12 col-lg-4">
    <div class="card border-warning border-5 m-5">
        <div id="cardProduct" class="card-body ">
            <h2 class="card-title">${product.name}</h2>
                <a href="productDetail.html/#5beaa8bf1c9d440000a57d94></a>
                <figure id="figure">
                    <p id="erreur"></p>
                    <img src=${product.imageUrl} class="img-fluid rounded align-items-center">
                </figure>
                <p class="text-right font-weight-bold">Prix:${product.price / 100}€</p>
            </a>
        </div>
    </div>
</div>`
} */



let cardProduct = document.getElementById('cardProduct');
let containerProduct = document.getElementById('listProduct'); 
var myFetch = fetch(config.host + config.api)
// je recupere l adresse api via la variable config

function showProduct(product) {
    containerProduct.innerHTML += 
    `<div class="col-12 col-lg-4">
    <div class="card border-warning border-5 m-5">
        <div id="cardProduct" class="card-body ">
            <h2 class="card-title">${product.name}</h2>    
            <a href="productDetail.html?id=${product._id}">
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
            
            <button onclick="window.location.href ="#" type="button" value="Commander" class="text-right float-right">Commander</button>
        </div>
    </div>
    </div>`
    }

myFetch.then(function (response) {
    return response.json()
    })
    .then(function(listProductData) {
       
        for (let product of listProductData) {
            console.log(listProductData)
            let teddy = new TeddyBears(product);
        showProduct(teddy);
        }
    })

       
//le retour en cas de non connection au serveur 
//.catch(function(err) => {
//    console.log('Fetch problem: ' + err.message);
//});

