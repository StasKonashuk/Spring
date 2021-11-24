let header_burger = document.querySelector('.header-burger');
let header_menu = document.querySelector('.header-menu');
let body = document.querySelector('body');
header_burger.onclick = function(){
  header_burger.classList.toggle('active');
  header_menu.classList.toggle('active');
  body.classList.toggle('lock');
}
