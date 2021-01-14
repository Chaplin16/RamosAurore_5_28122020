
// je recupere la photo de la liste
fetch(config.host + config.api)
    .then(response => {
        if(response.ok) { 
            response.json().then(listProductData => {
            const containerProduct = document.getElementById('listProduct');

                for (let product of listProductData) {
                    let teddy = new TeddyBears(product);
                    containerProduct.innerHTML += teddy.display();
                }
            })
        }else {
            console.log("ERREUR D AFFICHAGE")
            document.getElementById('erreur').innerHTML = "Oups!Il y a un soucis avec l'affichage de la jolie peluche :-("
        }
    }
)


