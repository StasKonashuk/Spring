class Projects {
  render() {
    let htmlCatalog = "";
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
    const html = `
      <div class="project-box-container">
        ${htmlCatalog}
      </div>
    `;
    for (let i = 0; i < ROOT_PROJECTS.length; i++) {
      ROOT_PROJECTS[i].innerHTML = html;
    }
  }
}

const projectsPage = new Projects();
projectsPage.render();
