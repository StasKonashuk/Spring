const menuArrows = document.querySelectorAll('.menu-arrow');
if (menuArrows.length > 0) {
  Array.from(menuArrows).forEach((item) => {
    const menuArrow = item;
    menuArrow.addEventListener('click', function (e) {
      menuArrow.parentElement.classList.toggle('_active')
    });
  });
}

const iconMenu = document.querySelector('.header-burger');
if (iconMenu) {
  const menuBody = document.querySelector('.menu-body');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active')
  });
}

document.querySelector('.proj-input').oninput = function () {
  setTimeout(() => {
    let val = this.value.trim().toLowerCase();
    let projects = PROJECTS;
    let htmlCatalog = "";
    if (val !== '') {
      let filteredArr = projects.filter(({ title, text }) => {
        return title.toLowerCase().indexOf(val) !== -1 || text.toLowerCase().indexOf(val) !== -1
      })
      if (filteredArr.length === 0) {
        htmlCatalog = `
      <div>
        <h1 class = 'no-results'>No Results</h1>
      </div>
      `
      } else {
        htmlCatalog += filteredArr.reduce((html, { imageUrl, title, text }) => {
          return html += `
            <a class="project-box">
              <div class="proj-icon-box">
                <img class="proj-icon" src=${imageUrl}/>
              </div>
              <div class="proj-text-conteiner">
                <h3 class="proj-text-title">${title}</h3>
                <p class="proj-text">${text}</p>
              </div>
            </a>
           `
        }, ``)
      }
    } else {
      projects.forEach(({ imageUrl, title, text }) => {
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
    const html = `
        <div class="project-box-container">
          ${htmlCatalog}
        </div>
    `;
    Array.from(ROOT_PROJECTS).forEach(item => {
      item.innerHTML = html
    })
  }, 300)
}