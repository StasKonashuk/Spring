class NavItems {
  render() {
    let htmlCatalog = "";
    NAV_ITEMS.forEach(({title, submenu}) => {
      if(submenu.length !== 0){
        htmlCatalog += `
        <li class="nav-item">
          <a href="#" class="menu-link-has-submenu">${title}</a>
          <span class="menu-arrow"></span>
          <ul class="menu-sublist">
        `
        submenu.forEach((item) => {
          switch(item){
            case 'View all Projects':
            htmlCatalog += `
            <li>
              <a href="#" class="blue-link">${item}</a>
            </li>
            `
            break;
            case 'Development Tools':
            htmlCatalog += `
            <li class="uppercase-text">
              ${item}
            </li>
            `
            break;
            case 'Spring Tools 4':
            htmlCatalog += `
            <li>
              <a href="#" class="menu-sublink">${item}</a>
            </li>
                <li class="menu-sublink">
                  <a href="#">
                    Spring Initializr
                    <svg
                      class="external-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <polyline
                        points="15 10.94 15 15 1 15 1 1 5.06 1"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      ></polyline>
                      <polyline
                        points="8.93 1 15 1 15 7.07"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      ></polyline>
                      <line
                        x1="15"
                        y1="1"
                        x2="8"
                        y2="8"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      ></line>
                    </svg>
                  </a>
                </li>
            `
            break;
            default:
            htmlCatalog += `
            <li>
              <a href="#" class="menu-sublink">${item}</a>
            </li>
            `;
            break;
          }
        })
        htmlCatalog += `
            </ul>
        </li>
        `
      }else{
        htmlCatalog += `
        <li>
          <a href="#" class="menu-link">${title}</a>
        </li>
        `
      }
    }
    )
    const html = `
      <div class="header-burger">
        <span></span>
      </div>
      <nav class="menu-body">
        <ul class="nav-items">
          ${htmlCatalog}
        </ul>
      </nav>
    `
    for (let i = 0; i < ROOT_NAV_ITEMS.length; i++) {
      ROOT_NAV_ITEMS[i].innerHTML = html;
    }
  }
}

const navItems = new NavItems();
navItems.render();
