
let plushId = localStorage.getItem('id');

let btn = localStorage.getItem('btn');
console.log(btn )


btn.addEventLister('click', function() {
    let cartTableBody = document.getElementById("cart-tablebody");
    let plushPrice = localStorage.getItem('price');
    let plushName = localStorage.getItem('firstName');
    let plushQuantity = localStorage.getItem('quantity');

    cartTableBody.innerHTML +=
      `<tr class="bg-white">
              <td>${plushPrice}</td>
              <td class="text-right pl-5">${plushName}</td>
              <td id="resultChoiseQuantity" class="text-left pl-5">${plushQuantity}</td>
              <td><img class="ml-4 h-75" src="trash-can_38501.png"></td>
              <td class="text-center">0€</td>
          </tr>
          <!--ligne des totaux-->
          <tr class="bg-white">
              <td>Prix total</td>
              <td></td>
              <td></td>
              <td></td>
              <td class="text-center">0€</td>
          </tr>`;
  })