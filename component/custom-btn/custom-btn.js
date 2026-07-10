class customBtn extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <div class="btn-container">
                    <div class="bg"></div>
                    <button class="custom-btn">Custom Button</button>
                </div>
        `;
    }
}
customElements.define('custom-btn', customBtn);