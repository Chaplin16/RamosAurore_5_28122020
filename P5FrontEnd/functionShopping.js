//je cree un panier 
//je dois creer un objet sur le modele d une peluche standart
//je dois ajouter chaque peluche au panier 
//je dois mettre en memoire le panier 
//je dois pouvoir vider le panier 

let MyShopping = (function() {

  //je cree mon tableau qui enregistre les articles selectionnés
  shopping = [];

  //je cree un objet sur le modele d un constructor
  function CardTeddy(idItem,price,firstName,quantityValue,color, count) {
      this.idItem = idItem;
      this.price = price;
      this.firstName = firstName;
      this.quantityValue = quantityValue;
      this.color = color;
      this.count = count
  }
  //je recupere les donnees du panier 
  function saveShopping() {
      localStorage.setItem('MyShopping', JSON.stringify(shopping));
  }
  //je parse les données en memoire qui sont dans le panier
  function loadshopping() {
      shopping = JSON.parse(localStorage.getItem('MyShopping'));
      }
  //si le panier contient 1 ou des articles alors je le(s) mets en memoire
      if (localStorage.getItem("MyShopping") != null) {
      loadshopping();
      }

  //je cree un objet à acheter
  var cardTeddy = {};
  
  cardTeddy.ajouter_produit_dans_panier = function(idItem, price, firstName, quantityValue, color, count) {
      for(var item in shopping) {
        if(panier[item].firstName === firstName) {
      panier[item].count ++;
      saveShopping();
      return;
        }
      }
        var item = new CardTeddy(idItem,price,firstName,quantityValue,color, count);
      panier.push(item);
      saveShopping();
  }
  
  cardTeddy.setCountForItem = function(firstName, count) {
    for(var i in shopping) {
      if (shopping[i].firstName === firstName) {
    shopping[i].count = count;
    break;
      }
    }
    };
})



 //FONCTION envoieVersServeur()------------------------------------------------------
 function envoieVersServeur(aEnvoyer) {
  //Envoie de l'objet "aEnvoyer" vers le serveur
  const promise01 = fetch("http://localhost:3000/api/cameras/order", {
  method: "POST",
  body: JSON.stringify(aEnvoyer),
  headers: {
  "Content-Type": "application/json",
  },
  });