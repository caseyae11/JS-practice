const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('hide');
  xicon.classList.toggle('active');
});

const xicon = document.querySelector('.xicon');
xicon.addEventListener('click', function() {
  nav.classList.toggle('active');
  xicon.classList.toggle('active');
  burger.classList.toggle('hide');
})



const header = document.querySelector('header');
let prev = window.pageYOffset;

window.addEventListener('scroll', function(){
  let current = window.pageYOffset;
  if(prev < current){
    header.classList.add('hide');
  }
  else {
    header.classList.remove('hide');
    }

    prev = current;

})