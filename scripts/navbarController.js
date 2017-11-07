// pull in data from navbarFactory
const navbarDatabase = require("./navbarFactory")

// get control of the dom element where we will place the contents of the navbar database
let navbarEl = document.getElementById("navbar")
let navbarCode = "<ul class='navbar__container'>"

navbarDatabase.forEach(el => {
    

    navbarCode += `
    <li class="navbar__link-container"><a href="${el.link}"`
    
    if (el.brand === true) {
        navbarCode += `class="navbar__link navbar__link--brand">${el.title}</a></li>
    `} else {    
        navbarCode += `class="navbar__link">${el.title}</a></li>
    `}
})

navbarCode += "</ul>"
navbarEl.innerHTML = navbarCode

let domNavLinks = document.getElementsByClassName("navbar__link")



// export the dom element for th
module.exports = navbarEl