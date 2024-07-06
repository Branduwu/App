import { html, css, LitElement } from '../../node_modules/lit/index.js';

class ContactPage extends LitElement {
  static styles = css`
    .container {
      margin-top: 20px;
    }
  `;

  render() {
    return html`
      <div class="container grey-text">
        <h5 class="center">Contáctanos</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!</p>
        <div class="divider"></div>
        <h6>Encuéntranos en:</h6>
        <ul>
          <li>123 Spicy Noodle Road</li>
          <li>Manchester, UK</li>
        </ul>
      </div>
    `;
  }
}

customElements.define('contact-page', ContactPage);
