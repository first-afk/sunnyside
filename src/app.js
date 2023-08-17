const hamburger = document.querySelector('.hamburger')
const navlist = document.querySelector('.navlist')
const button = document.querySelector('.button')

function toggleButton() {
    navlist.classList.toggle('show')
    button.classList.remove('button')
}

hamburger.addEventListener('click', toggleButton)

