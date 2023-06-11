const convertButton = document.getElementById("convertButton");
const colorResult = document.getElementById("colorResult");

convertButton.addEventListener("click", () => {
    const rgbInput = document.getElementById("rgbInput").value;

  // Call the rgbToHex function with the input value
    const hexColor = rgbToHex(rgbInput);

  // Update the colorResult element with the converted color
    if (hexColor) {
    colorResult.textContent = `Hexadecimal Color: ${hexColor}`;
    } else {
    colorResult.textContent = "Invalid RGB Color";
    }
});

function rgbToHex(rgb) {
    const rgbRegex = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;
    const match = rgb.match(rgbRegex);

    if (match) {
    const [, r, g, b] = match;
    const hexR = parseInt(r).toString(16).padStart(2, "0");
    const hexG = parseInt(g).toString(16).padStart(2, "0");
    const hexB = parseInt(b).toString(16).padStart(2, "0");
    return `#${hexR}${hexG}${hexB}`;
    } else {
    return null;
    }
}
