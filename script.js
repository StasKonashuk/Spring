'use strict'

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/Iphone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
}
if(isMobile.any()){
  document.body.classList.add('_touch');
  let menuArrows = document.querySelectorAll('.menu-arrow');
  if(menuArrows.length > 0){
    for(let i = 0; i < menuArrows.length; i++){
      const menuArrow = menuArrows[i];
      menuArrow.addEventListener('click', function(e){
        menuArrow.parentElement.classList.toggle('_active')
      });
    }
  }
}else{
  document.body.classList.add('_pc')
}
const iconMenu = document.querySelector('.header-burger');
if(iconMenu){
  const menuBody = document.querySelector('.menu-body');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active')
  });
}
