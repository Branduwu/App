import { html, css, LitElement } from '../../node_modules/lit/index.js';

class SideNav extends LitElement {
  static styles = css`
    ul.sidenav {
      width: 250px;
    }
  `;

  render() {
    return html`
      <ul id="side-menu" class="sidenav side-menu">
        <li><a class="subheader">TIENDA DE PASTELES</a></li>
        <li><a href="/" class="waves-effect">Inicio</a></li>
        <li><a href="/about.html" class="waves-effect">Sobre Nosotros</a></li>
        <li><div class="divider"></div></li>
        <li><a href="/contact.html" class="waves-effect"><i class="material-icons">mail_outline</i>Contacto</a></li>
      </ul>
    `;
  }
}

customElements.define('side-nav', SideNav);
