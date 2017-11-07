// create a review Database array
const reviewDatabase = []

// create a factory function to create each review object. Passing the productId for the product that the review is referencing
const reviewGen = (productId, review, reviewer) => {
    // use array.push instead of return to have each product placed into the ProductDatabase array upon creation
    reviewDatabase.push( Object.create(null,  {
        "productId": {
            "value": productId,
            enumerable: true
        },
        "review": {
            "value": review,
            enumerable: true
        },
        "reviewer": {
            "value": reviewer,
            enumerable: true
        },
    
    }))
}

// create reviews
const review1 = reviewGen(1, "I just love this rug. It covers all of the scratches on my floor from my boyfiends dog.", "Jane Hapstum")
const review2 = reviewGen(2, "This couch is amazing. Whenever I sit in it, I lose track of time and end up watching an entire season of Stranger Things!", "Joe Shmoe")
const review3 = reviewGen(3, "This chair is amazing. It allows me to be comfortable while in the room with other people and still not have to touch them", "Sarah Sant")
const review4 = reviewGen(1, "This rug is great, it's geometric, large and doesn't smell", "Anonymous")
const review5 = reviewGen(1, "This rug is alright, it's not the best rug ever, but it makes my feet warmer so, I'm keeping it.", "Lazy College Student")
const review6 = reviewGen(2, "This couch is large and comfy. I like how I can lay on it, and fall asleep instantly", "Overworked gen-xer")
const review7 = reviewGen(2, "I usually love couches, but this one is way too scratchy. I'd return it but the return shipping is way too expensive", "Chris Math")
const review8 = reviewGen(3, "This a great armchair. My dog sleeps in it everyday.", "Jane Ita")
const review9 = reviewGen(3, "As far as arm chairs go, this one is the bees knees. I love the look and the girls that come over always sit in it immediately", "Ricardo Siuza")


// export review Database so that other modules can use it
module.exports = reviewDatabase