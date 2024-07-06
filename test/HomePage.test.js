import { fixture, expect, html } from '@open-wc/testing';
import '../src/components/HomePage.js';

describe('HomePage Component', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<home-page></home-page>`);
    expect(el.shadowRoot.querySelector('.container')).to.exist;
    expect(el.shadowRoot.querySelector('h5').textContent).to.contain('Bienvenidos a nuestra Tienda de Pasteles');
  });

  it('renders recipe cards', async () => {
    const el = await fixture(html`<home-page></home-page>`);
    const recipes = el.shadowRoot.querySelectorAll('recipe-card');
    expect(recipes.length).to.be.greaterThan(0);
  });
});
