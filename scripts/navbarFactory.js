const NavbarDatabase = []

const navbarFactory = (title, link, boolean) => {
    NavbarDatabase.push( Object.create(null, {
        "title": {
            "value": title,
            enumerable: true
        },
        "link": {
            "value": link,
            enumerable: true
        },
        "brand": {
            "value": boolean,
            enumerable: true
        }
    }))
}

const brand = navbarFactory("Betsy", "#", true)
const categories = navbarFactory("Categories", "#", false)
const orders = navbarFactory("Orders", "#", false)
const logOut = navbarFactory("Log Out", "#", false)

module.exports = NavbarDatabase