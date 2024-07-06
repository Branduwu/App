import { fixture, expect, html } from '@open-wc/testing';
import '../src/components/ContactPage.js';

describe('ContactPage Component', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<contact-page></contact-page>`);
    expect(el.shadowRoot.querySelector('.container')).to.exist;
    expect(el.shadowRoot.querySelector('h5').textContent).to.contain('Contáctanos');
  });
});
