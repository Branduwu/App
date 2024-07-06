import { fixture, expect, html } from '@open-wc/testing';
import '../src/components/RecipeCard.js';

describe('RecipeCard Component', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<recipe-card title="Test Title" ingredients="Test Ingredients"></recipe-card>`);
    expect(el.shadowRoot.querySelector('.recipe-title').textContent).to.equal('Test Title');
    expect(el.shadowRoot.querySelector('.recipe-ingredients').textContent).to.equal('Test Ingredients');
  });

  it('has delete button', async () => {
    const el = await fixture(html`<recipe-card></recipe-card>`);
    expect(el.shadowRoot.querySelector('.recipe-delete')).to.exist;
  });
});
