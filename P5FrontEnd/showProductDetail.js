
var myFetch = fetch(config.host + config.api)
let containerProductDetail = document.getElementById('containerProductDetail');
const urlParams = new URL(document.location).searchParams;
const id = urlParams.get("id");

console.log(id);

let itemId = {
    method:"GET/:_id"
}


fetch("http://localhost:3000/api/teddies",itemId)
    .then(function (response) {
    return response.json()
    })
    .then(function(showItem){
    let teddy = new TeddyBears(product);
    containerProductDetail.innerHTML
    })
//.catch(error => alert("Erreur : " + error));

   