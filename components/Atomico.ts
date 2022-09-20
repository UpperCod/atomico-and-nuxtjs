import { auto } from "@atomico/vue";
import { c, html } from "atomico";

function atomico({ value }) {
  return html`<host shadowDom>
    <h1>welcome!:${value}</h1>
    <slot></slot>
  </host>`;
}

atomico.props = {
  value: { type: Number, value: 100 },
};

const Atomico = c(atomico);

customElements.define("atomico-component", Atomico);

export default auto(Atomico);
