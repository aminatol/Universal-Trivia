let firstPage = document.getElementById("first-page");
let triviaQuest = document.getElementById("quiz");
let getScore = document.getElementById("score");
let startButton = document.getElementById("start");
const triviaArray = ["easy", "medium", "hard"];
const animeCategory = 31;
var currentScore = 0;

function startQuiz(e) {
  e.preventDefault();
  firstPage.classList.add("hidden");
  triviaQuest.classList.remove("hidden");
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
async function getQuizData() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple"
  );
  var data = await response.json();
  console.log(data);
}
getQuizData();

async function displayTrivia() {
  let questions = await loadTrivia();
  return data.results.map((x) => );
}
displayTrivia();

// $("div.demo-container" ).html("<p>${x.question}</p>")