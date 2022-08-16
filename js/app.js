const burger = document.querySelector('.burger')
const navlist = document.querySelector('.nav__list')

burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    navlist.classList.toggle('active')
})