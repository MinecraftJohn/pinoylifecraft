var navigationMenu = document.getElementById("navigationMenu")
var navigationMenuClose = document.getElementById("navigationMenuClose")
var navigationList1 = document.getElementById("navigationList1")
var navigationList2 = document.getElementById("navigationList2")
var navigationLogo = document.getElementById("navigationLogo")

// NAVIGATION MENU SCRIPT
function navigationMenuFadeout () {
    navigationMenu.style.animation = "NavMenuOpen .3s forwards"
    navigationMenuClose.style.display = "block"
    navigationMenuClose.style.animation = "NavMenuClose .3s forwards"
    navigationLogo.style.visibility = "hidden"
    navigationList1.style.transition = "left .3s"
    navigationList1.style.left = "0px"
    navigationList1.style.boxShadow = "rgb(0 0 0 / 50%) 200px 0px 0px 200px, rgb(0 0 0 / 50%) 850px 0px 0px 200px"
    navigationList2.style.transition = "left .3s"
    navigationList2.style.left = "-10px"
}
function navigationMenuFadein () {
    navigationMenu.style.animation = "NavMenuClose .3s forwards"
    navigationMenuClose.style.animation = "NavMenuOpen .3s forwards"
    navigationMenuClose.style.visibility = "hidden"
    navigationLogo.style.visibility = "visible"
    navigationList1.style.left = "-250px"
    navigationList1.style.boxShadow = "none"
    navigationList2.style.left = "-250px"
}