const idMaker = function* (startFrom = 0) {
    let id = 1;
    
    while (true) {
        yield id + startFrom;
        id++;
    } 
}

const idGen = idMaker()

const ProductDatabase = []

const productFactory = (title, description, price, quantity, image) => {
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

const rug = productFactory("area rug", "Cover and protect your floors with this styling area rug", 125, 10, "http://www.californiadesigns.com/wp-content/uploads/2017/02/rug-.jpeg")

const couch = productFactory("couch", "Relax your back while lounging on this super squishy couch", 1000, 20, "http://cozycouchsf.com/wp-content/uploads/2016/03/main-image.jpg")

const armChair = productFactory("arm chair", "This chair is great for when you want to relax and sit by yourself at the same time.", 500, 15, "https://images.homedepot-static.com/productImages/d24eefac-2699-49f0-9056-b8a64f248cb4/svn/brown-home-decorators-collection-accent-chairs-0849600760-64_400_compressed.jpg")




module.exports = ProductDatabase