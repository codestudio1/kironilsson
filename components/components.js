// Nav component

class Nav extends HTMLElement {
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
    this.innerHTML = `
    <div id="nav">
      <a href="/index.html"><img class="logo web" src="img/logoWithText.png" height="50px"></a>
      <a href="/index.html"><img class="logo phone" src="img/logoOnly.png" height="50px"></a>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">What we do</a></li>
        <li><a href="ourTeam.html">Our team</a></a></li>
        <li><a href="testimonials.html">Testimonials</a></li>
        <li><a href="research.html">Research</a></li>
        <li><a href="legal.html">Legal</a></li>
        <li><a href="contact.html">Contact</a></li>

      </ul>
      
    </div>
    `;
  }
}

customElements.define("nav-component", Nav);

// Footer component

class Footer extends HTMLElement {
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
    this.innerHTML = `
    <div>
      <div class="footer-items bg-green">
        <div class="footer-item">
          <img class="footer-logo" src="img/icpa-250px.webp" alt="">
          ICPA
        </div>
        
        <div class="footer-item">
            <img class="footer-logo" src="img/rcc-licentiate.webp" alt="">
            General Chiropractic Council
        </div>
        <div class="footer-item">
        <img class="footer-logo" src="img/col-fisos.webp" alt="">
        Fisioterapeutes de la Comunidad Valenciana
        </div>
        <div class="footer-item">
        <div class="footer-item">
            <img class="footer-logo" src="img/gcc-registered.webp" alt="">
            General Chiropractic Council
        </div>
        <img class="footer-logo" src="img/socialstyrelsen.webp" alt="">
        Registrerad vid Socialstyrelsen
        </div>
      </div>
    </div>
    <div class="footer-items bg-black">
      <div>
        <p>Call us: <a href="tel:+34692611475">+34692611475</a></p>
        <p>Find us: <a href="https://maps.app.goo.gl/icBLQtyQ44JDjDK77">Find us</a></p>
        <p>Mail us: <a href="contact.html">Mail us</a></p>
      </div>

    </div>
      
      
    </div>
    `;
  }
}

customElements.define("footer-component", Footer);
