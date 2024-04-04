const foo = document.getElementById("footer-contacts");
foo.innerHTML = `
  <div>
    <p>Plaza Balduino I de Belgica</p>
    <p>Telephone: +34 692 61 14 75</p>
    <p>Mail: kironilsson@kironilsson.com</p>
  </div>
`;

document.body.appendChild(foo.innerHTML);