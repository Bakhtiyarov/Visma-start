const navBurger = document.querySelector('.nav__burger')
const navBurgerLine = document.querySelector('.nav__burger-line')
const navMenu = document.querySelector('.nav__menu')

navBurger.addEventListener('click', () => {
    navBurgerLine.classList.toggle('active')
    navMenu.classList.toggle('active')
})

const headerBurger = document.querySelector('.header__burger')
const headerBurgerLine = document.querySelector('.header__burger-line')
const headerMenu = document.querySelector('.header__menu')

headerBurger.addEventListener('click', () => {
    headerBurgerLine.classList.toggle('active')
    headerMenu.classList.toggle('active')
})