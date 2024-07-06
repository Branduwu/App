import { html, LitElement } from '../node_modules/lit/index.js';
import './components/NavBar.js';
import './components/SideNav.js';
import './components/HomePage.js';
import './components/AboutPage.js';
import './components/ContactPage.js';

class CakeShopApp extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <side-nav></side-nav>
      <home-page></home-page>
    `;
  }
}

customElements.define('cake-shop-app', CakeShopApp);
