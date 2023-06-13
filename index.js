let firstPage = document.getElementById("first-page");
let triviaQuest = document.getElementById("quiz");
let getScore = document.getElementById("score");
let startButton = document.getElementById("start");
const categories = 
const animeCategory = 31;


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

  async function getQuiz(){
  categories.forEach(categories) 
    fetch(`https://opentdb.com/api.php?amount=10&category=31&difficulty=${categories}&type=multiple`)
    .await((response) => response.json());
  }
}
quizTopic();


