let allProducts = []
if (localStorage.SimpleEProducts) {
    allProducts = JSON.parse(localStorage.getItem('SimpleEProducts'))
}
document.getElementById("addProduct").addEventListener('click', () => {
    if (!productName.value || !productPrice.value || !productCategory.value || !productImage.value) {
        Swal.fire({
            icon: 'error',
            title: 'Fill in all the required space',
            confirmButtonColor: "#2B7EFA"
        })
    }
    else {
        const imageFile = productImage.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', async () => {
            // console.log(reader.result);
            imageURL = reader.result
            // console.log(imageURL);
            let newProduct = {
                productImage: reader.result,
                productName: productName.value,
                productPrice: productPrice.value,
                productCategory: productCategory.value,
            }
            allProducts.push(newProduct)
            console.log(allProducts);
            localStorage.setItem('SimpleEProducts', JSON.stringify(allProducts))
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            })

            await Toast.fire({
                icon: 'success',
                title: 'Product successfully added!'
            })
        });
    }

})