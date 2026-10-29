
class customInput extends HTMLElement {
    connectedCallback() {
        const type = this.getAttribute("type") || "text";
        const placeholder = this.getAttribute("placeholder") || "";

        const width = this.getAttribute("width") || "400px";
        const height = this.getAttribute("height") || "30px";
        const radius = this.getAttribute("radius") || "5px";
        const bgColor = this.getAttribute("bg-color") || "#fafafa";
        const textColor = this.getAttribute("text-color") || "#1d0329";

        this.innerHTML = `
            <div class="input-container">
                <div class="bg"></div>
                <input type="${type}" class="input-text">
            </div>
        `;

        const container = this.querySelector(".input-container");
        const input = this.querySelector(".input-text");

        container.style.setProperty("--element-width", width);
        container.style.setProperty("--element-height", height);
        container.style.setProperty("--element-border-radius", radius);
        container.style.setProperty("--element-background-color", bgColor);
        container.style.setProperty("--element-text-color", textColor);

        input.placeholder = placeholder;
    }
}

customElements.define("custom-input", customInput);
