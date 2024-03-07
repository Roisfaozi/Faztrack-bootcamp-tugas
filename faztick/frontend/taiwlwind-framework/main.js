import './style.css'

const menuIcon = document.querySelector('.menu-icon')
const mobileMenu = document.getElementById('mobileMenu')

function showMenu() {
  menuIcon.addEventListener('click', function () {
    console.log('show')
    mobileMenu.classList.toggle('show-menu')
  })
}

function removeMobileMenuOnLargeScreen() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  if (screenWidth > 720) {
    mobileMenu.classList.remove('show-menu')
  }
}

document.addEventListener('DOMContentLoaded', removeMobileMenuOnLargeScreen)
window.addEventListener('resize', removeMobileMenuOnLargeScreen)
menuIcon.addEventListener('click', showMenu())
