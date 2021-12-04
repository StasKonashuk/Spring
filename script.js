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

document.querySelector('.proj-input').oninput = function(){
  setTimeout(() => {
    let val = this.value.trim().toLowerCase();
  let projects = PROJECTS;
  let htmlCatalog = "";
  if(val !== ''){
    projects.forEach(({title, text, imageUrl}) => {
      if(title.toLowerCase().indexOf(val) === -1 && text.toLowerCase().indexOf(val) === -1){
        htmlCatalog += ``;
      }else{
        htmlCatalog += `
        <a class="project-box">
          <div class="proj-icon-box">
            <img class="proj-icon" src=${imageUrl}/>
          </div>
          <div class="proj-text-conteiner">
            <h3 class="proj-text-title">${title}</h3>
            <p class="proj-text">${text}</p>
          </div>
        </a>
      `;
      }
    })
  }else{
    PROJECTS.forEach(({ id, imageUrl, title, text }) => {
      htmlCatalog += `
        <a class="project-box">
          <div class="proj-icon-box">
            <img class="proj-icon" src=${imageUrl}/>
          </div>
          <div class="proj-text-conteiner">
            <h3 class="proj-text-title">${title}</h3>
            <p class="proj-text">${text}</p>
          </div>
        </a>
      `;
    });
  }
  if(htmlCatalog === ``){
    htmlCatalog = `
      <div>
        <h1 class = 'no-results'>No Results</h1>
      </div>
    `
  }
  const html = `
      <div class="project-box-container">
        ${htmlCatalog}
      </div>
    `;
  for (let i = 0; i < ROOT_PROJECTS.length; i++) {
    ROOT_PROJECTS[i].innerHTML = html;
  }
  }, 300)
}

