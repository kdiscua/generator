function displayAI(response) {
  new Typewriter("#topic", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAI(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "524a99a4fcd0df4388dto8e069b84440";
  let context =
    "You are a book expert and love to read books. You mission is to generate one book. In FOUR sentences explain what the book is about. Include the name of the book at the beginning in basic HTML and separate the name with a <br />. Make sure to follow the user instructions. Add the author's name inside a <strong> element at the end of the summary and NOT at the beginning";
  let prompt = `User instructions: Generate a book about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let topicElement = document.querySelector("#topic");
  topicElement.classList.remove("hidden");
  topicElement.innerHTML = `<div class="generating">⏳ Generating a ${instructionsInput.value} book</div>`;

  axios.get(apiURL).then(displayAI);
}

let generatorElement = document.querySelector("#form-generator");
generatorElement.addEventListener("submit", generateAI);
