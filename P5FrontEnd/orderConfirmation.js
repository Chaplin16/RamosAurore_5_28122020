let priceOrder = document.getElementById("priceOrder");
totalOrder = localStorage.getItem("totalOrder");
priceOrder.innerHTML = `<span>${totalOrder}</span> €`;
