const NavbarDatabase = []

const navbarFactory = (title, link) => {
    NavbarDatabase.push( Object.create(null, {
        "title": {
            "value": title,
            enumerable: true
        },
        "link": {
            "value": link,
            enumerable: true
        }
    }))
}

const brand = navbarFactory("Betsy", "#")
const categories = navbarFactory("Categories", "#")
const orders = navbarFactory("Orders", "#")
const logOut = navbarFactory("Log Out", "#")


module.exports = NavbarDatabase