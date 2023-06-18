let firstPage = document.getElementById("first-page");
let secondPage = document.getElementById("second-page");
let getScore = document.getElementById("score");
let startButton = document.getElementById("start");

function startQuiz(e) {
  e.preventDefault();
  firstPage.classList.add("hidden");
  secondPage.classList.remove("hidden");
}

startButton.addEventListener("click", startQuiz);

function quizTopic() {
  const triviaBox = document.createElement("div");
  triviaBox.classList.add("anime");
  triviaBox.innerHTML =
    "Let's test your knowledge on Japanese Anime and Manga!";
  triviaQuest.append(triviaBox);
}
quizTopic();

//make call to trivia API

async function loadQuestion() {
  const APIUrl = "https://opentdb.com/api.php?amount=1";
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  result.innerHTML = "";
  showQuestion(data.results[0]);
}
