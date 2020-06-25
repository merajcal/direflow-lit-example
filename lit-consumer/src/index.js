import { LitElement, html } from 'lit-element';
import { configure, observable, computed, action } from "mobx";
import { STORE } from './TodoList'

configure({
  enforceActions: "always"
});
class WrapperComponent extends LitElement {
  connectedCallback() {
    console.log('STORE :::', JSON.stringify(STORE.todo.todos))
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
  //  this.shadowRoot.querySelector('direflow-lit').sampleList = ['Updated item 1', 'Updated item 2', 'Updated item 3'];
  }


  selectTask(e) {
    console.log(e.target.id);
    STORE.todo.setSelectTask(e.target.id)
    this.requestUpdate()
  }
  
  render() {
    console.log('Data from store before passing as props', JSON.stringify(STORE.todo.selectedTask))
    return html`
    ${STORE.todo.todos.map(todo => { return html` <button @click="${this.selectTask}" id="${todo.id}" style="${STORE.todo.selectedTask.id === todo.id? 'background: green; color: #fff;': 'background: none; color: #000;'}">${todo.title}</button> `})}
      
      
      ${STORE.todo.selectedTask.id == 1 ?
      html`<div style="border: 2px solid yellow"><direflow-lit id="${STORE.todo.selectedTask.id}" .sampleList="${[STORE.todo.selectedTask.title]}"></direflow-lit></div>` 
      : 
      html`<direflow-lit id="${STORE.todo.selectedTask.id}"  .sampleList="${[STORE.todo.selectedTask.title]}" ></direflow-lit>`}
    `;
  }
}

customElements.define('wrapper-component', WrapperComponent);
