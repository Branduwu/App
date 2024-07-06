import { html, css, LitElement } from '../../node_modules/lit/index.js';
import './RecipeCard.js';

class HomePage extends LitElement {
  static styles = css`
    .container {
      margin-top: 20px;
    }
    .center {
      text-align: center;
    }
  `;

  render() {
    return html`
      <div class="container grey-text text-darken-1">
        <h5 class="center">Bienvenidos a nuestra Tienda de Pasteles</h5>
        <p>Aquí encontrarás los pasteles más deliciosos.</p>
        <div class="divider"></div>
        <div class="recipes">
          <recipe-card title="Pastel de Chocolate" ingredients="Chocolate, Harina, Azúcar"></recipe-card>
          <recipe-card title="Pastel de Vainilla" ingredients="Vainilla, Harina, Azúcar"></recipe-card>
        </div>
      </div>
      <div class="center">
        <a class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form">
          <i class="material-icons">add</i>
        </a>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
