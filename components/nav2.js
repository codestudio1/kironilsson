class Nav extends HTMLElement {
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
    this.innerHTML = `
    <div class="topnav cream">
    <a href="index.html"
      ><img
        class="nav-logo"
        src="img/GG-logo-symbol-141px-black.png"
        height="30px"
        alt=""
    /></a>

    <div class="nav-items">
      <a class="nav-item active" href="index.html">Hem</a>
      <a class="nav-item" href="ledarskap.html">Ledarskap</a>
      <a class="nav-item" href="kommunikation.html">Kommunikation</a>
      <a class="nav-item" href="kreativitet.html">Kreativitet</a>
      <a class="nav-item" href="contact.html">Kontakt</a>
    <div class="ham-menu">
          <nav id="navbar" class="navigation" role="navigation">
            <input id="toggle1" type="checkbox" />
            <label class="hamburger1" for="toggle1">
              <div class="top"></div>
              <div class="meat"></div>
              <div class="bottom"></div>
            </label>

            <nav class="nav-menu">
              <a class="link1" href="ledarskap.html">Ledarskap</a>
              <a class="link1" href="kommunikation.html">Kommunikation</a>
              <a class="link1" href="kreativitet.html">Kreativitet</a>
              <a class="link1" href="contact.html">Kontakt</a>
            </nav>
          </nav>
        </div>
`
  };
};

customElements.define("nav-component", Nav);