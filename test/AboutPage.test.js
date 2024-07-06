import { fixture, expect, html } from '@open-wc/testing';
import '../src/components/AboutPage.js';

describe('AboutPage Component', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<about-page></about-page>`);
    expect(el.shadowRoot.querySelector('.container')).to.exist;
    expect(el.shadowRoot.querySelector('h5').textContent).to.contain('Sobre Nosotros');
  });
});
