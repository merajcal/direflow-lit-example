import { LitElement, html } from 'lit-element';

class WrapperComponent extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.addPropertiesToComponent();
  }

  /**
   * Add some properties to the Direflow Component
   */
  async addPropertiesToComponent() {
    // Wait until the lit-element has fully updated itself
    await this.updateComplete;
    
    // Update the title
    this.shadowRoot.querySelector('direflow-lit').componentTitle = 'Updated Title';

    // Update the sample list
    this.shadowRoot.querySelector('direflow-lit').sampleList = ['Updated item 1', 'Updated item 2', 'Updated item 3'];
  }

  render() {
    return html`
      <direflow-lit></direflow-lit>
    `;
  }
}

customElements.define('wrapper-component', WrapperComponent);
