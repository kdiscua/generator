function generateAI(event) {
  event.preventDefault();

  new Typewriter("#topic", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let generatorElement = document.querySelector("#form-generator");
generatorElement.addEventListener("submit", generateAI);
