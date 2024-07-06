import { html, css, LitElement } from '../../node_modules/lit/index.js';

class NavBar extends LitElement {
  static styles = css`
    nav {
      background: var(--primary);
      border-bottom: 10px solid var(--secondary);
    }
    nav a {
      text-transform: uppercase;
      color: var(--title);
    }
    nav a span {
      font-weight: bold;
    }
    nav .sidenav-trigger {
      margin: 0;
    }
  `;

  render() {
    return html`
      <nav class="z-depth-0">
        <div class="nav-wrapper container">
          <a href="/">Tienda de <span>Pasteles</span></a>
          <span class="right grey-text text-darken-1">
            <i class="material-icons sidenav-trigger" data-target="side-menu">menu</i>
          </span>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
