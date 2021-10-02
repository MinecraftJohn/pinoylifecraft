var mobilenavMenu = document.getElementById("mobilenavMenu")
var mobilenavMenuClose = document.getElementById("mobilenavMenuClose")
var navList = document.getElementById("navList")
var mobilenavLogo = document.getElementById("mobilenavLogo")

// NAVIGATION MENU SCRIPT
function mobilenavMenuFadeout () {
    mobilenavMenu.style.animation = "NavMenuOpen .3s forwards"
    mobilenavMenuClose.style.display = "block"
    mobilenavMenuClose.style.animation = "NavMenuClose .3s forwards"
    mobilenavLogo.style.visibility = "hidden"
    navList.style.transition = "left .3s"
    navList.style.left = "0px"
    navList.style.boxShadow = "rgb(0 0 0 / 50%) 200px 0px 0px 200px, rgb(0 0 0 / 50%) 850px 0px 0px 200px"
    navList.style.transition = "left .3s"
    navList.style.left = "-10px"
}
function mobilenavMenuFadein () {
    mobilenavMenu.style.animation = "NavMenuClose .3s forwards"
    mobilenavMenuClose.style.animation = "NavMenuOpen .3s forwards"
    mobilenavMenuClose.style.visibility = "hidden"
    mobilenavLogo.style.visibility = "visible"
    navList.style.left = "-250px"
    navList.style.boxShadow = "none"
    navList.style.left = "-250px"
}