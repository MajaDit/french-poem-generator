const displayPoem = (response) => {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
};

const generatePoem = (event) => {
  event.preventDefault();

  let userInput = document.getElementById("user-input");
  let apiKey = "7b34357f3et00d865954fab83029o0ae";
  let context =
    "You are a romantic poem expert that likes to write short poems in French. Your mission is to generate 4-line poems. The poem must be displayed in 4 lines. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a French poem about ${userInput}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
};

let poemFormElement = document.getElementById("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
