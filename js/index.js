const productSpinner = document.getElementById('products-spinner')
let globalProducts = []

const fetchProducts = async() => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    productSpinner.style.display = 'none'

    data.forEach(product => {
        createProductDiv(product)
    })
    globalProducts = data
    
} 

const showCartItems = () => {
    let cartProducts = globalProducts.filter(product => cartItems.includes(product.id))
    
}
