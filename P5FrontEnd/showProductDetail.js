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
            <div class="col-5 border card border">                    
                <figure id="figure">
                   <p id="erreur"></p>
                   <img src=${showTeddy.imageUrl} class="img-fluid rounded align-items-center mt-3" alt="ours en peluche">
                </figure>
            </div>  
            <div id="card-body" class=" col-5 border  flex flex-col flex-wrap bg-light">
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
                <p id="quantity-wanted" class="text-right">
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
                </p>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/>
                <img src="star-solid.jpg"/> 
                <button onclick="window.location.href ="#" type="button"class="add-to-cart float-right mb-4 " data-id="${showTeddy._id}" data-name="${showTeddy.name}" data-price="${showTeddy.price /100}"  value="Commander">Ajouter au panier</button>
            </div>
        </section>`;

// je cree ma variable d options de couleurs 
        let stringOptionColor = ""; 

// j utilise une boucle for pour incrementer mes couleurs
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
 
    })

