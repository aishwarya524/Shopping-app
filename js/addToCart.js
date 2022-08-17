const cartItemsLength = document.getElementById('cart-items-length')
let cartItemIds = []

const addToCart = (id) => {
    cartItemIds.push(id)
    cartItemsLength.innerText = cartItemIds.length
    let carItem = globalProducts.find(product => product.id == id)
    createItemsInCart(carItem)    
}
