let allProducts = JSON.parse(localStorage.getItem("SimpleEProducts"));
// console.log(allProducts);
const productLoad = () => {
    if (allProducts) {
        viewProducts.innerHTML = ""
        allProducts.map((eachProduct, index) => {
            // console.log(eachProduct);
            viewProducts.innerHTML += `
        <div class="row">
          <div class="col-md-2 col-12">
            <div class="card">
                <img src="${eachProduct.productImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title" id="editName">Name: ${eachProduct.productName}</h5>
                <h5>Price: ₦ ${eachProduct.productPrice}</h5>
                <p class="card-text d-flex gap-3"><button class="btn btn-warning col-6" onclick="editProduct(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit <i class="fa fa-pen-to-square"  ></i></button>
                <button class="btn btn-danger col-6" onclick="deleteProduct(${index})">Delete <i class="fa-solid fa-trash" ></i></button></p>
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
    console.log(index);
    allProducts.splice(index, 1)
    console.log(allProducts);
    localStorage.setItem("SimpleEProducts", JSON.stringify(allProducts))
    productLoad()
}

const editProduct = (index)=>{
    editname.value = allProducts[index].productName
    editprice.value = allProducts[index].productPrice
    console.log(allProducts[index]);
    localStorage.setItem('index',index)
    productLoad()
    
}
const saveProduct = ()=>{
    let indx =  Number(localStorage.getItem('index')
    )
    let newProduct = {
        productImage: allProducts[indx].productImage,
        productName: editname.value,
        productPrice: editprice.value,
        productCategory: allProducts[indx].productCategory,
    }
    allProducts.splice(indx,1,newProduct)
    localStorage.setItem("SimpleEProducts",JSON.stringify(allProducts))
    productLoad()
    Swal.fire({
        icon: 'success',
        title: 'New Product Saved Successfully',
        confirmButtonColor: "#2B7EFA"
    })
}