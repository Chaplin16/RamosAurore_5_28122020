//creation des variables

// variable (html placé dans la fiche produit)
let containerProductDetail = document.getElementById('containerProductDetail');

//je recuperele le parametre (id) de la fin de l url
const urlParams = new URL(document.location).searchParams;
const id = urlParams.get("id");

//j envoi une requete avec l'url precis(id) du nounours
fetch("http://localhost:3000/api/teddies/" + id)
//premiere promesse avec la reponse json
    .then(function (response) {
        return response.json() 
    })
//je cree une fonction pour recuperer les donnees de cette url
    .then(function (showTeddy) {
       
        // je recupere les infos precis du nounours (nom, image, prix, description )
        containerProductDetail.innerHTML +=
            `<section class="flex row justify-content-center mt-3 mb-3">
            <div class="col-5 border card border-warning border-right-0">                    
                <figure id="figure">
                   <p id="erreur"></p>
                   <img src=${showTeddy.imageUrl} class="img-fluid rounded align-items-center mt-3" alt="ours en peluche">
                </figure>
            </div>  
            <div id="card-body" class=" col-5 border border-warning  border-left-0 flex flex-col flex-wrap bg-light">
                <h2 class="card-title text-center font-weight-bold mt-4">${showTeddy.name}</h2>    
               <figcaption>
                   <p class="card-text text-center">${showTeddy.description}</p>
                </figcaption>  
                <div class="form">
                    <p class="lead font-weight-bold mt-4 mb-2">Si vous voulez me personnaliser</p>
                      <div id="choise" class="form-check">
             
                      </div>  
                </div>    
                <p class="text-right font-weight-bold">Prix:${showTeddy.price / 100}€</p>
                <form class="text-right">
                    <label>Quantité</label>
                    <select id="quantity" name="quantite">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </form>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/> 
                <input type="submit" onclick= "window.location.href ='orderProduct.html';" id="addToCart" class="float-right mb-4 btn btn-warning font-weight-bold border-dark" data-id="${showTeddy._id}" data-name="${showTeddy.name}" data-price="${showTeddy.price /100}" value="Commander"></button>
            </div>
        </section>`;
        
//AFFICHER LA QUANTITE DE PRODUIT A ACHETER DANS LE PANIER
        //variable de l endroit où je recupere les quantités
        let quantity = document.getElementById("quantity");  
             console.log(quantity) 
           
        let quantityInCart = document.getElementById("quantity-in-cart");
            console.log(quantityInCart)//<p id="quantity-in-cart"></p>
        
        // creation ecouteur d evenement avec recuperation des quantités pour affichage dans le panier 
       
         quantity.addEventListener("input", function() { 
            quantityInCart.innerHTML = `<span>${quantity.value}</span> articles`;
           
            
         });

 //RECUPERER LES INFOS DU BOUTON
        let btnAddToCart = document.getElementById("addToCart");
            
        console.log(btnAddToCart) // <input type="submit" onclick= "window.location.href ='orderProduct.html';" id="addToCart" class="float-right mb-4 btn btn-warning font-weight-bold border-dark" data-id="5be9c8541c9d440000665243" data-name="Norbert" data-price="29" value="Commander"></button>
            
        let teddyPrice = btnAddToCart.dataset.price;
        let teddyId = btnAddToCart.dataset.id;
        let teddyName = btnAddToCart.dataset.name;

        console.log(teddyPrice) // 29
        console.log(teddyId) // 5be9c8541c9d440000665243
        console.log(teddyName) // Norbert

            

//AFFICHER LES OPTIONS DE COULEURS        
// je cree ma variable d options de couleurs 
        let stringOptionColor = ""; 

// j utilise une boucle for pour notifier chaque couleur
        for (let color of showTeddy.colors) {
             stringOptionColor += `<option value="${color}">${color}</option>`
         }

// variable de la fiche produit où je veux rajouter les options de couleurs
        const choise = document.getElementById("choise");

// rajout des options de couleurs dans cette variable 
            choise.innerHTML += 
            `<label class="form-check-label pb-1">
                Choississez votre couleur: 
             </label><br>
            <select id="clr" name="color">
            ${stringOptionColor}</select>`
 
    });
    
