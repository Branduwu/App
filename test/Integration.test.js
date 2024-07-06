import { fixture, expect, html } from '@open-wc/testing';
import '../src/main.js';

describe('Integration Test', () => {
  it('renders the main application', async () => {
    const el = await fixture(html`<cake-shop-app></cake-shop-app>`);
    expect(el.shadowRoot.querySelector('nav-bar')).to.exist;
    expect(el.shadowRoot.querySelector('side-nav')).to.exist;
    expect(el.shadowRoot.querySelector('home-page')).to.exist;
  });
});
