import { html, css, LitElement } from '../../node_modules/lit/index.js';

class RecipeCard extends LitElement {
  static styles = css`
    .recipe {
      margin-top: 20px;
    }
    .card-panel {
      border-radius: 8px;
      padding: 10px;
      box-shadow: 0px 1px 3px rgba(90, 90, 90, 0.1);
      display: grid;
      grid-template-columns: 2fr 6fr 1fr;
      grid-template-areas: "image details delete";
      position: relative;
    }
    .recipe img {
      grid-area: image;
      max-width: 60px;
    }
    .recipe-details {
      grid-area: details;
      margin-top: 6px;
    }
    .recipe-delete {
      grid-area: delete;
      position: absolute;
      bottom: 0px;
      right: 0px;
    }
    .recipe-title {
      font-weight: bold;
    }
    .recipe-ingredients {
      font-size: 0.8em;
    }
  `;

  static properties = {
    title: { type: String },
    ingredients: { type: String },
  };

  render() {
    return html`
      <div class="card-panel recipe white row">
        <img src="/img/dish.png" alt="recipe thumb">
        <div class="recipe-details">
          <div class="recipe-title">${this.title}</div>
          <div class="recipe-ingredients">${this.ingredients}</div>
        </div>
        <div class="recipe-delete">
          <i class="material-icons">delete_outline</i>
        </div>
      </div>
    `;
  }
}

customElements.define('recipe-card', RecipeCard);
