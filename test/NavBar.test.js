import { fixture, expect, html } from '@open-wc/testing';
import '../src/components/NavBar';

describe('NavBar Component', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<nav-bar></nav-bar>`);
    expect(el.shadowRoot.querySelector('nav')).to.exist;
    expect(el.shadowRoot.querySelector('a').textContent).to.contain('Tienda de Pasteles');
  });
});
