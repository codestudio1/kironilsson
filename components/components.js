// Nav component

class Nav extends HTMLElement {
  
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
 
     this.innerHTML = `
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="research.html">Research</a></li>
        <li><a href="legal.html">Legal</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>`
  };
};

customElements.define('nav-component', Nav);

// Footer component

class Footer extends HTMLElement {
  
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
 
     this.innerHTML = `
    <div id="footer">
      <p>Hello footer</p>
      <p>Next line</p>
    </div>
    `
  };
};

customElements.define('footer-component', Footer);