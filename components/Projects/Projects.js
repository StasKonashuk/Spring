(function projectsRender() {
    let htmlCatalog = PROJECTS.reduce((html, {imageUrl, title, text}) => {
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
      `;
    }, ``);
    const html = `
      <div class="project-box-container">
        ${htmlCatalog}
      </div>
    `;
    Array.from(ROOT_PROJECTS).forEach(item => {
      item.innerHTML = html
    })
})()
