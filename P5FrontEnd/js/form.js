//je recupere l'emplacement du bouton
let btnSubmit = document.getElementById("btnSubmit");
 
//je cree le onclick sur le bouton
btnSubmit.addEventListener("click", function (event) {
    document.getElementById("form").reportValidity();
    event.preventDefault();
//verification du panier 
    if(basketIsRight() == true) {  
// je cree un objet avec les valeurs que je recupere par les id
        let contact = {
                'firstName': document.getElementById("userName").value,
                'lastName': document.getElementById("userLastName").value,
                'address': document.getElementById("userAdress").value,
                'email': document.getElementById("userEmail").value,
                'city': document.getElementById("userCity").value    
        }     
//je cree un tableau reunissant les articles du panier
        let products = [];
        for(let i = 0; i < basket.length; i++){
            products.push(basket[i].idItem);
        }  

//je cree un objet avec les donnees du formulaire et le tableau 
//je fais une chaine de caractere
        let sendInfo = JSON.stringify({
            contact,
            products, 
        });

//j'envoie des donnees au serveur    
        fetch("http://localhost:3000/api/teddies/order", {
            method: "post",
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            mode:"cors",
            body: sendInfo            
        })   
            .then(function (response) {
                return response.json()
            })  
            .then(function(data) {
//j enregistre la commande

                let user = data.contact.lastName;
                let orderId = data.orderId;
//ouverture de la page de confirmation
	       		window.location.assign("confirmation.html?orderId="+orderId+"&user="+user)
            })
            //le retour en cas de non connection au serveur 
            .catch(function(err) {
            console.log('Retour info Api problem: ' + err.message);
            })
        
    } else {
        alert("votre panier est vide");
    }

});

