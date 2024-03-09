class Nav extends HTMLElement {
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
    this.innerHTML = `
    
  <nav class="hamburger">
    <div>
      <input id="toggle1" type="checkbox" />
      <label class="hamburgerToggle" for="toggle1">
        <div class="top"></div>
        <div class="meat"></div>
        <div class="bottom"></div>
      </label>
    </div>
    <div class="navmenu">
      <a class="navlink" href="index.html">Home</a>
      <a class="navlink" href="legal.html">Legal</a>
      <a class="navlink" href="research.html">Research</a>
      <a class="navlink" href="contact.html">Contact</a>
    </div>
  </nav>  
`
  };
};

customElements.define("nav-component", Nav);