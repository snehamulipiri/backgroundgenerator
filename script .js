var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function downloadBackground() {
  domtoimage.toBlob(document.body)
    .then(function (blob) {
      var link = document.createElement("a");
      link.download = "background.png";
      link.href = URL.createObjectURL(blob);
      link.click();
    })
    .catch(function (error) {
      console.error("Error generating background image:", error);
    });
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

document.getElementById("downloadBtn").addEventListener("click", downloadBackground);
