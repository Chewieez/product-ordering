// pull in data from productFactory and reviewFactory modules
const ProductDatabase = require("./productFactory.js")
const ReviewDatabase = require("./reviewFactory.js")


// combine product info for DOM and Review info for DOM and display them together

// get control of the DOM element to place the products info
let productsDisplayEl = document.getElementById("productsDisplay")

// start building a dom string to display product data
let productEl = "<h1>Products</h1>"

// create function to display product info from database
const createProductsDisplay = (ProductDatabase, ReviewDatabase) => {

    // loop through each database item
    ProductDatabase.forEach(product => {
        
        // append to the dom string variable with data from each product in database
        productEl += `
        <article class="product" id="prod_${product.id}">
            <div class="product__title"><h2>${product.title}</h2></div>
            <div class="product__description">${product.description}</div>
            <div class="product__price-quantity">
            <div class="product__price">Price: $${product.price}</div>
            </div>
            <div class="product__quantity">Qty: ${product.quantity}</div>
            <div class="product__image-container"><img src="${product.image}" class="product__image" width="200" alt="${product.title}"></div>
        `
        // filter the review database and look for reviews that match the current product id
        let matchingReviews = ReviewDatabase.filter(review => product.id === review.productId)
        
        // start building a dom string to display review data
        let productReviews = "<div class='product__reviews'><h4>Reviews:</h4>"

        // loop through array of matching reviews
        matchingReviews.forEach(review => {
            // append to review dom string with data from each review
            productReviews += `
            <p>${review.review} &nbsp &nbsp &nbsp --${review.reviewer}</p>
            `
        })

        // append the review dom string variable to the product dom string variable. 
        productEl += productReviews + "</div></article> <hr>"
    })

    // push the product dom string to the DOM
    productsDisplayEl.innerHTML = productEl
}

// export the function to create the products display on DOM. When this module is required/loaded in the main.js, this function gets called.
module.exports = createProductsDisplay(ProductDatabase, ReviewDatabase)