var mobilenavMenu = document.getElementById("mobilenavMenu")
var mobilenavMenuClose = document.getElementById("mobilenavMenuClose")
var navList = document.getElementById("navList")
var mobilenavLogo = document.getElementById("mobilenavLogo")
var mobilenavMenuBackground = document.getElementById("mobilenavMenuBackground")

// NAVIGATION MENU SCRIPT
function mobilenavMenuFadeout () {
    mobilenavMenu.style.animation = "NavMenuOpen .3s forwards"
    mobilenavMenuClose.style.display = "block"
    mobilenavMenuClose.style.animation = "NavMenuClose .3s forwards"
    mobilenavLogo.style.visibility = "hidden"
    navList.style.transition = "left .3s"
    navList.style.left = "0px"
    mobilenavMenuBackground.style.display = "block"
}
function mobilenavMenuFadein () {
    mobilenavMenu.style.animation = "NavMenuClose .3s forwards"
    mobilenavMenuClose.style.animation = "NavMenuOpen .3s forwards"
    mobilenavMenuClose.style.visibility = "hidden"
    mobilenavLogo.style.visibility = "visible"
    navList.style.left = "-250px"
    mobilenavMenuBackground.style.display = "none"
}