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

async function getQuiz() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple"
  );
  var data = await response.json();
  console.log(data);
}
getQuiz();

function trivialist() {
  var quizQuestions = data.results;
  for (let i = 0; i < quizQuestions.length; i++)
    var question = quizQuestions[i].question;
  var correctAnswers = quizQuestions[i].correct_answers;
  var incorrectAnswers = quizQuestions.incorrect_answers;
  var totalScore = correctAnswers,
    incorrect_answers;
}
