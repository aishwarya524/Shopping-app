const productsParent = document.getElementById('products')

/*
<div class="col-md-3">
    <div class="card product">
    <img src="" class="card-img-top">
    <div class="card-body">
        <div class="product-header">
            <h5 class="card-title">Card Title</h5>
            <h4 class="card-title product-price">$30</h4>
        </div>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <span class="star">
                <span class="fa fa-star fill-color"></span>
                <span class="fa fa-star fill-color"></span>
                <span class="fa fa-star fill-color"></span>
                <span class="fa fa-star fill-color"></span>
                <span class="fa fa-star-half"></span>
            </span>
            <span class="rating-count">
            (1,290)
            </span>            
        <div class="btn-outer">
            <a href="#" class="btn btn-primary card-btn">Add to cart</a>
            <a href="#" class="btn btn-primary card-btn">Buy now</a>
        </div>
    </div>
</div>
*/

// {
// 	category: "men's clothing"
// 	description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// 	id: 1
// 	image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// 	price: 109.95
// 	rating: {rate: 3.9, count: 120}
// 	title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// }

const createProductDiv = (product) => {
    const colDiv = document.createElement('div')
    const productDiv = document.createElement('div')
    const productImg = document.createElement('img')
    const productBody = document.createElement('div')
    const productHeader = document.createElement('div')
    const productTitle = document.createElement('h6')
    const productPrice = document.createElement('h5')
    const productDescription = document.createElement('p')
    const ratingStars = document.createElement('span')
    const ratingStar1 = document.createElement('span')
    const ratingStar2 = document.createElement('span')
    const ratingStar3 = document.createElement('span')
    const ratingStar4 = document.createElement('span')
    const ratingStar5 = document.createElement('span')
    const ratingCount = document.createElement('span')
    const cardButtonOuter = document.createElement( 'div')
    const addToCartButton = document.createElement('a')
    const buyButton = document.createElement('a')

    colDiv.classList = 'col-md-3'
    productDiv.classList = 'card product'
    productImg.classList = 'card-img-top'
    productBody.classList = 'card-body'
    productHeader.classList = 'product-header'
    productTitle.classList = 'card-title'
    productPrice.classList = 'card-title product-price'
    productDescription.classList = 'card-text'
    ratingStars.classList = 'star'
    ratingStar1.classList = 'fa fa-star checked'
    ratingStar2.classList = 'fa fa-star checked'
    ratingStar3.classList = 'fa fa-star checked'
    ratingStar4.classList = 'fa fa-star checked'
    ratingStar5.classList = 'fa fa-star checked'
    ratingCount.classList = 'rating-count'
    cardButtonOuter.classList = 'btn-outer'
    addToCartButton.classList = 'btn btn-primary add-to-cart-btn card-btn'
    buyButton.classList = 'btn btn-primary card-btn'

    productImg.src = product.image
    productImg.alt = 'product-img'

    productsParent.appendChild(colDiv)
    colDiv.appendChild(productDiv)
    productDiv.appendChild(productImg)
    productDiv.appendChild(productBody)
    productBody.appendChild(productHeader)
    productHeader.appendChild(productTitle)
    productHeader.appendChild(productPrice)
    productBody.appendChild(productDescription)
    productBody.appendChild(ratingStars)
    productBody.appendChild(ratingCount)
    productBody.appendChild(cardButtonOuter)
    cardButtonOuter.appendChild(addToCartButton)
    cardButtonOuter.appendChild(buyButton)

    const rating = Math.ceil(product.rating.rate)
    rating >= 1 && ratingStars.appendChild(ratingStar1)
    rating >= 2 && ratingStars.appendChild(ratingStar2)
    rating >= 3 && ratingStars.appendChild(ratingStar3)
    rating >= 4 && ratingStars.appendChild(ratingStar4)
    rating >= 5 && ratingStars.appendChild(ratingStar5)

    colDiv.id = `product-${product.id}`

    productTitle.innerText = `${product.title.slice(0, 25)}...`
    productPrice.innerText = `$${product.price}`
    productDescription.innerText = `${product.description.slice(0, 45)}...`
    ratingCount.innerText = `(${product.rating.count})`
    addToCartButton.innerHTML = '<i class="fa fa-cart-plus" aria-hidden="true"></i>'
    buyButton.innerText = 'Buy now'

    let productId = product.id
    addToCartButton.addEventListener('click', function () {
        addToCart(productId)
        this.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
		this.classList.add('disabled');
    } )
}
