// Nav component

class Nav extends HTMLElement {
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
    this.innerHTML = `
    <div class="navbar">
        <div class="logos">
          <a class="web" href="/index.html"><img class="logo web" src="img/logoWithText.png"></a>
          <a class="phone" href="/index.html"><img class="logo phone" src="img/logoOnly.png"></a>
        </div>
        <div class="nav-items">
          <a href="index.html">Home</a>
            <div class="dropdown">
              <button class="dropbtn">About us
              <i class="fa fa-caret-down"></i>
              </button>
      <div class="dropdown-content">
        <a href="about.html">About</a>
        <a href="ourteam.html">Our Team</a>
        
      </div>
    </div>
      <a href="research.html">Research</a>
      
       
      <div class="dropdown">
        <button class="dropbtn">Legal
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="aviso.html">Aviso</a>
          <a href="privacidad.html">Privacidad</a>
          <a href="cookies.html">Cookies</a>
        </div>
      </div>
      <a href="testimonials.html">Testimonials</a>
      <a href="contact.html">Contact</a>
      
    </div>
      <div id="hamburger-menu" onclick="toggleHamburger()">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="hamburger-items" id="hamburger-items">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="testimonials.html">Testimonials</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
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
          <img class="footer-logo" src="img/icpa-250px.webp" alt="">ICPA
        </div>
        <div class="footer-item">
          <img class="footer-logo" src="img/rcc-licentiate.webp" alt="">General Chiropractic Council
        </div>
        <div class="footer-item">
          <img class="footer-logo" src="img/col-fisos.webp" alt="">Fisioterapeutes de la Comunidad Valenciana
        </div>
        <div class="footer-item">
            <img class="footer-logo" src="img/gcc-registered.webp" alt="">General Chiropractic Council
        </div>
        <div class="footer-item">
          <img class="footer-logo" src="img/socialstyrelsen.webp" alt="">Registrerad vid Socialstyrelsen
        </div>
      </div>
    </div>
    <div class="footer-items bg-lilac">
      <div class="footer-contact">
        <p>Call us: </p>
        <a href="tel:+34692611475">+34692611475</a>
      </div>
      <div class="footer-contact">  
        <p>Find us: </p>
        <a href="https://maps.app.goo.gl/icBLQtyQ44JDjDK77">Find us</a>
      </div>
      <div class="footer-contact">
        <p>Mail us: </p>
        <a href="contact.html">Mail us</a>
      </div>
      </div>

    </div>
      
      
    </div>
    `;
  }
}

customElements.define("footer-component", Footer);

function toggleHamburger() {
  let element = document.getElementById("hamburger-items");
  element.classList.toggle("visible");
}
