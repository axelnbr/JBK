class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="Footer">
        <div class="isifooter">
            <h1>JBK</h1>
            <p><i class="fa-regular fa-copyright"></i>2023 PT JBK. All Right Reserved</p>
        </div>

    <div class="navbarfooter">
      <h1>Follow Us</h1>
        <ul class="ulfooter">
            <li><a href="https://www.tiktok.com/@axelnbr_22"><i class="fa-brands fa-tiktok"></i></a></li>
            <li><a href="https://www.instagram.com/axelnbr_22/"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/axelnbr"><i class="fa-brands fa-linkedin"></i></a></li>
        </ul>
    </div>
</div>
    `;
  }
}

customElements.define("footer-1", FooterComponent);
