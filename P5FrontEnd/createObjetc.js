//objet constructor function
class TeddyBears {
    constructor(product) {
        this.name = product.name;
        this.price = product.price;
        this.imageUrl = product.imageUrl;
    }

    display() {
        return `<div class="col-12 col-lg-4">
        <div class="card border-warning border-5 m-5">
            <div id="cardProduct" class="card-body ">
                <figure id="figure">
                    <p id="erreur"></p>
                <img src=${this.imageUrl} class="img-fluid rounded align-items-center"></figure>
            <h2 class="card-title">${this.name}</h2>
            <p class="text-right font-weight-bold">${this.price}</p></div>
        </div>
    </div>`
    }

convertToEuro() {
    const parsed = Number.parseInt(this.price);
    parsed = this.price / 100
    return parsed;
  }

}
