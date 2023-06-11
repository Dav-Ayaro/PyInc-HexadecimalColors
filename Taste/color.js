const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".pyinc_gen");

const maxPaletteBoxes = 35;

const generatepalette = () => {
    container.innerHTML = "";
    for (let pycolor = 0; pycolor <  maxPaletteBoxes; pycolor++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML  = `<div class="rect_box" style="background: ${randomHex}"></div>
                            <span class="hex_value">${randomHex}</span>`;
        // click event to ccopy the color
        color.addEventListener("click", () => copyColor(color, randomHex));

        container.appendChild(color);
    }
}
generatepalette();

const copyColor = (elem, hexval) => {
    const colorElement = elem.querySelector(".hex_value");
    navigator.clipboard.writeText(hexval).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexval, 1000);
    }).catch(() => alert("Failed to copy the color code!"));//alert  that color cannot be copied
}

refreshBtn.addEventListener("click",generatepalette);