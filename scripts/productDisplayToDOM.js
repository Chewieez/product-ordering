const ProductDatabase = require("./productFactory.js")
const ReviewDatabase = require("./reviewFactory.js")
// console.log("ProductDatabase: ", ProductDatabase)
// console.log("ReviewDatabase: ", ReviewDatabase)

// combine product info for DOM and Review info for DOM and display them together


let productsDisplayEl = document.getElementById("productsDisplay")
let productEl = ""

const createProductsDisplay = (ProductDatabase, ReviewDatabase) => {

    
    ProductDatabase.forEach(product => {
        
        let x = 1   
       
        productEl += `
        <article class="product" id="prod_${product.id}">
            <div class="product__title"><h1>${product.title}</h1></div>
            <div class="product__description">${product.description}</div>
            <div class="product__price-quantity">
            <div class="product__price">Price: $${product.price}</div>
            </div>
            <div class="product__quantity">Qty: ${product.quantity}</div>
            <div class="product__image"><img src="${product.image}" width="200" alt="${product.title}"></div>
        `
        
        let matchingReviews = ReviewDatabase.filter(review => product.id === review.productId)
        
        let productReviews = "<div class='product__reviews'><h4>Reviews:</h4><blockquote>"

        matchingReviews.forEach(review => {
            productReviews += `
            <p>${review.review}  --${review.reviewer}</p>
            `
        })

        productReviews += "</blockquote>"
        productEl += productReviews + "</div></article> <hr>"
    })

    
    productsDisplayEl.innerHTML = productEl
}

//createProductsDisplay(ProductDatabase, ReviewDatabase)

module.exports = createProductsDisplay(ProductDatabase, ReviewDatabase)