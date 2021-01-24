///recuuperer les infos de
    
  let firstname = localStorage.getItem('firstname')
  let price = localStorage.getItem('price')
  let quantity = localStorage.getItem('quantity')
  let color = localStorage.getItem('color')


 let cartTableBody = document.getElementById("cart-tablebody");


 let cart = [];
 for (let i =0; i<cart.length; i++) {
     cart.push(data);
 }


 cartTableBody.innerHTML = "";
 let total = 0;
 total += price*quantity; 

      cartTableBody.innerHTML += `
        <tr class="bg-white">
          <td>${firstname}</td>
          <td class="text-left pl-5">${price}€</td>
          <td id="resultChoiseQuantity" class="text-left pl-5">${quantity}</td>
          <td><img class="ml-4 h-75" src="trash-can_38501.png"></td>
          <td class="text-center">${total}€</td>
        </tr>
        <tr class="bg-white">
          <td>Prix total</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="text-center">${total}€</td>
        </tr>`;
