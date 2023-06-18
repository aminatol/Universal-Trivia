let firstPage = document.getElementById("first-page");
let secondPage = document.getElementById("second-page");
let getScore = document.getElementById("score");
let startButton = document.getElementById("start");
const _result = document.getElementById("result");
/* hide first page with click to start */
function startQuiz(e) {
  e.preventDefault();
  firstPage.classList.add("hidden");
  secondPage.classList.remove("hidden");
}

startButton.addEventListener("click", startQuiz);

//make call to trivia API
async function loadQuestion() {
  const APIUrl = "https://opentdb.com/api.php?amount=1";
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  _result.innerHTML = "";
  showQuestion(data.results[0]);
}
