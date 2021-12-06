(function navItemsRender() {
  let htmlCatalog = NAV_ITEMS.reduce((html, { title, submenu }) => {
    if (submenu.length !== 0) {
      html += `
        <li class = "nav-item">
          <a href = "#" class = "menu-link-has-submenu">${title}</a>
          <span class = "menu-arrow"></span>
          <ul class = "menu-sublist">
      `;
      submenu.forEach((item) => {
        if (item === "View all Projects") {
          html += `
            <li>
              <a href = "#" class = "blue-link">${item}</a>
            </li>
          `;
        } else if (item === "Development Tools") {
          html += `
            <li class = "uppercase-text">
              ${item}
            </li>
          `;
        } else if (item === "Spring Tools 4") {
          html += `
            <li>
              <a href = "#" class = "menu-sublink">${item}</a>
            </li>
                <li class = "menu-sublink">
                  <a href = "#">
                    Spring Initializr
                    <svg
                      class = "external-link-icon"
                      xmlns = "http://www.w3.org/2000/svg"
                      viewBox = "0 0 16 16"
                    >
                      <polyline
                        points = "15 10.94 15 15 1 15 1 1 5.06 1"
                        fill = "none"
                        stroke = "currentColor"
                        stroke - miterlimit = "10"
                        stroke - width="2"
                      ></polyline>
                      <polyline
                        points = "8.93 1 15 1 15 7.07"
                        fill = "none"
                        stroke = "currentColor"
                        stroke - miterlimit = "10"
                        stroke - width = "2"
                      ></polyline>
                      <line
                        x1 = "15"
                        y1 = "1"
                        x2 = "8"
                        y2 = "8"
                        fill = "none"
                        stroke = "currentColor"
                        stroke - miterlimit = "10"
                        stroke - width = "2"
                      ></line>
                    </svg>
                  </a>
                </li>
          `;
        } else {
          html += `
          <li>
            <a href = "#" class = "menu-sublink">${item}</a>
          </li>
          `;
        }
      });
      html += `
            </ul>
        </li>
      `;
    } else {
      html += `
        <li>
          <a href = "#" class = "menu-link">${title}</a>
        </li>
      `;
    }
    return html;
  }, ``);
  const html = `
      <div class = "header-burger">
        <span></span>
      </div>
      <nav class = "menu-body">
        <ul class = "nav-items">
          ${htmlCatalog}
        </ul>
      </nav>
    `;
  Array.from(ROOT_NAV_ITEMS).forEach((item) => {
    item.innerHTML = html;
  });
})();
