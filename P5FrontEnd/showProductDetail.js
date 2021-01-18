
let containerProductDetail = document.getElementById('containerProductDetail');
const urlParams = new URL(document.location).searchParams;
const id = urlParams.get("id");


fetch("http://localhost:3000/api/teddies/" + id)
  .then(function(response) { console.log(response)
      return response.json()    
  })
  .then(function(showTeddy){
        containerProductDetail.innerHTML = 
        `<section class="flex row justify-content-center">
        <div class="col-5 border card border-warning">                    
            <figure id="figure">
               <p id="erreur"></p>
               <img src=${showTeddy.imageUrl} class="img-fluid rounded align-items-center" alt="ours en peluche">
            </figure>
        </div>  
        <div id="card-body" class=" col-5 border  flex flex-col flex-wrap bg-light">
            <h2 class="card-title text-center mt-3">${showTeddy.name}</h2>    
           <figcaption>
               <p class="card-text text-center">${showTeddy.descritpion}</p>
            </figcaption>  
            <div class="form">
                <p class="lead font-weight-bold">Si vous voulez me personnaliser</p>
                <div class="form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="origine" value="color" checked>
                    couleur rouge
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="origine" value="color">
                    color vert 
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="origine" value="color">
                    color jaune
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="origine" value="color">
                    color bleu
                    </label>
                </div> 
            </div>    
            <p class="text-right font-weight-bold">Prix:${showTeddy.price / 100}€</p>
            <img src="star-solid.jpg"/>
            <img src="star-solid.jpg"/>
            <img src="star-solid.jpg"/>
            <img src="star-solid.jpg"/>
            <img src="star-solid.jpg"/> 
           <button onclick="window.location.href ="#" type="button" value="Commander" class="float-right">Commander</button>
        </div>
    </div>`

  })



/* fetch("http://localhost:3000/api/teddies",itemId)
    .then(function (response) {
    return response.json()
   })
    .then(function(showItem){
   
   containerProductDetail.innerHTML
    })
//.catch(error => alert("Erreur : " + error));
 */
   