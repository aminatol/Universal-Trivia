let firstPage = document.getElementById("first-page");
let secondPage = document.getElementById("second-page");
let getScore = document.getElementById("score");
let startButton = document.getElementById("start");
const trivResult = document.getElementById("result");
/* hide first page with click to start */
function startQuiz(e) {
  e.preventDefault();
  firstPage.classList.add("hidden");
  secondPage.classList.remove("hidden");
}

startButton.addEventListener("click", startQuiz);

//make call to trivia API
async function loadQuestions() {
  const APIUrl =
    "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple";
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  trivResult.innerHTML = "";
  console.log(data.results[0]);
}
loadQuestions();