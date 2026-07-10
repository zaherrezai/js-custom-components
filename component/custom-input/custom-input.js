class customInput extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <div class="input-container">
                    <div class="bg"></div>
                    <input type="text" class="input-text" placeholder="Enter your task">
                </div>
        `;
    }
}

customElements.define('custom-input', customInput);