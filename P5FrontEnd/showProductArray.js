let cardProduct = document.getElementById('cardProduct');
let containerProduct = document.getElementById('listProduct'); 
var myFetch = fetch(config.host + config.api)
// je recupere l adresse api via la variable config

function showProduct(product) { 
    let url = "productDetail.html?id=" + product.id

    containerProduct.innerHTML += 
    `<div class="col-12 col-lg-4">
    <div class="card border-warning border-5 m-5">
        <div id="cardProduct" class="card-body ">
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


            let teddy = new TeddyBears(product);
            
        showProduct(teddy);
        }
    })

       
//le retour en cas de non connection au serveur 
//.catch(function(err) => {
//    console.log('Fetch problem: ' + err.message);
//});

