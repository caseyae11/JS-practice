const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))


const circle = document.querySelector('.circle')
let prev = window.pageYOffset

window.addEventListener('scroll', () => {
    let current = window.pageYOffset
    if(prev < current){
        circle.classList.add('hide')
    }
    else {
        circle.classList.remove('hide')
    }
    prev = current
    })       