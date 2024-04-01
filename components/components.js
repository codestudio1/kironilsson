// Nav component

class Nav extends HTMLElement {
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
    this.innerHTML = `
    <div class="navbar">
      <a class="logo" href="index.html"><img class="logo" src="img/logoWithText.png"></a>
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
          <a href="ourteam.html">Our team</a>
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
    <div class="footer-items">
      <div class="footer-links bg-green">
        <div class="footer-link">
          <a href="https://icpa4kids.com/" target="_blank"><img src="img/icpa-250px.webp" alt="icpa logo">ICPA</a>
          
        </div>
        <div class="footer-link">
          <a href="https://rcc-uk.org/"><img src="img/rcc-licentiate.webp" alt="">Royal College <br>of Chiropractors</a>
        </div>
        <div class="footer-link">
          <a href="https://www.colfisiocv.com/"><img src="img/col-fisos.webp" alt="">Fisioterapeutes de la <br>Comunidad Valenciana</a>
        </div>
        <div class="footer-link">
          <a href="https://www.gcc-uk.org/"><img src="img/gcc-registered.webp" alt="">General Chiropractic Council</a>
        </div>
        <div class="footer-link">
          <a href="http://www.socialstyrelsen.se/english"><img src="img/socialstyrelsen.webp" alt="">Registrerad vid Socialstyrelsen, Sweden</a>
        </div>  
      </div>
    
      <div class="footer-contacts bg-lilac">
        <div class="footer-contact">
          <a href="tel:+34692611475">Call us today: +34692611475</a>
        </div>
        <div class="footer-contact">  
          <a href="https://maps.app.goo.gl/icBLQtyQ44JDjDK77">Find us on Google</a>
        </div>
        <div class="footer-contact">
          <a href="mailto:kironilsson@kironilsson.com">Send us an e-mail</a>
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


// accordion script

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}