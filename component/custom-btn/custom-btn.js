
class customBtn extends HTMLElement {
    connectedCallback() {
        const text = this.getAttribute("text") || "Custom Button";
        const width = this.getAttribute("width") || "150px";
        const height = this.getAttribute("height") || "50px";
        const radius = this.getAttribute("radius") || "15px";
        const bgColor = this.getAttribute("bg-color") || "#3f0b63";
        const textColor = this.getAttribute("text-color") || "#ffffff";

        this.innerHTML = `
            <div class="btn-container">
                <div class="bg"></div>
                <button type="button" class="custom-btn">
                    <span class="btn-text"></span>
                </button>
            </div>
        `;

        const container = this.querySelector(".btn-container");
        const button = this.querySelector(".custom-btn");

        container.style.setProperty("--element-width", width);
        container.style.setProperty("--element-height", height);
        container.style.setProperty("--element-border-radius", radius);
        container.style.setProperty("--element-background-color", bgColor);
        container.style.setProperty("--element-text-color", textColor);

        button.querySelector(".btn-text").textContent = text;
    }
}

customElements.define("custom-btn", customBtn);
