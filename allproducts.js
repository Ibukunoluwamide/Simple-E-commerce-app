let allProducts = JSON.parse(localStorage.getItem("SimpleEProducts"));
console.log(allProducts);
const productLoad = () => {
    if (allProducts) {
        allProducts.map((eachProduct, index) => {
            console.log(eachProduct);
            viewProducts.innerHTML = `
        <div class="row">
          <div class="col-md-2 col-6">
            <div class="card">
                <img src="${eachProduct.productImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Name: ${eachProduct.productName}</h5>
                <h5>Price: ₦ ${eachProduct.productPrice}</h5>
                <p class="card-text d-flex gap-3"><button class="btn btn-warning">Edit <i class="fa fa-pen-to-square" onclick="editProduct(${index})" ></i></button>
                <button class="btn btn-danger">Delete <i class="fa-solid fa-trash" onclick="deleteProduct(${index})"></i></button></p>
            </div>
          </div>
        </div>

        `;
        });
    }
    if (allProducts == "" || !allProducts) {
        viewProducts.innerHTML = `
                <div class="alert alert-primary fs-4 text-center" role="alert">
                    <i class="fa fa-circle-info"></i>
                    No Products!
                </div>
          `
        localStorage.removeItem("SimpleEProducts");
    }
}
productLoad()
const deleteProduct = (index) => {
    allProducts.splice(index, 1)
    localStorage.setItem("SimpleEProducts", JSON.stringify(allProducts))
    productLoad()
}