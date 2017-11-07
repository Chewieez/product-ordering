// create a id generator function to make unique ids for each product
const idMaker = function* (startFrom = 0) {
    let id = 1;
    
    while (true) {
        yield id + startFrom;
        id++;
    } 
}
// assign id generator to a variable to create an instance
const idGen = idMaker()

// create a database array
const ProductDatabase = []

// create a product Factory to use to create each file
const productFactory = (title, description, price, quantity, image) => {
    // use array.push instead of return to have each product placed into the ProductDatabase array upon creation
    ProductDatabase.push( Object.create(null, {
        "id": {
            value: idGen.next().value,
            enumerable: true,
        },
        "title": {
            value: title,
            enumerable: true
        },
        "description": {
            value: description,
            enumerable: true
        },
        "quantity": {
            value: quantity,
            enumerable: true
        },
        "price": {
            value: price,
            enumerable: true
        },
        "image": {
            value: image,
            enumerable: true
        },
    }))
}

// create products using the product factory
const rug = productFactory("Area Rug", "Cover and protect your floors with this styling area rug", 125, 10, "http://www.californiadesigns.com/wp-content/uploads/2017/02/rug-.jpeg")

const couch = productFactory("The Comfiest Couch", "Relax your back while lounging on this super squishy couch", 1000, 20, "http://cozycouchsf.com/wp-content/uploads/2016/03/main-image.jpg")

const armChair = productFactory("Arm Chair", "This chair is great for when you want to relax and sit by yourself at the same time.", 500, 15, "https://images.homedepot-static.com/productImages/d24eefac-2699-49f0-9056-b8a64f248cb4/svn/brown-home-decorators-collection-accent-chairs-0849600760-64_400_compressed.jpg")



// export the ProductDatabase array to other modules can access it
module.exports = ProductDatabase