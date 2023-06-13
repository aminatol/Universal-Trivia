let firstPage = document.getElementById("first-page");
let triviaQuest = document.getElementById("test");

let startButton = document.getElementById("start");

function startQuiz(e) {
  e.preventDefault();
  firstPage.classList.add("hidden");
  triviaQuest.classList.remove("hidden");
}

 startButton.addEventListener("click", startQuiz);

// let questions = document.getElementById("trivia-question.numb");
// (questions = [
//   {
//     question: "This is the national flag of which nation",
//     option: [
//       { text: "A. Bangladesh", correct: false },
//       { text: "B. Jordan", correct: false },
//       { text: "C. India", correct: false },
//       { text: "D. Sri Lanka", correct: true },
//     ],
//     correct: 3,
//   },
// ]),
//   [
//     {
//       question: "What is the capitol of France?",
//       option: [
//         { text: "A. Cannes", correct: false },
//         { text: "B. Nice", correct: false },
//         { text: "C. Paris", correct: true },
//         { text: "D. Nantes", correct: false },
//       ],
//       correct: 2,
//     },
//   ];
// [
//   {
//     question: "Which Planet is the largest in our solar system?",
//     option: [
//       { text: "A. Saturn", correct: false },
//       { true: "B. Jupiter", corect: true },
//       { text: "C. Neptune", correct: false },
//       { text: "D. Venus", correct: false },
//     ],
//     corret: 1,
//   },
// ],
//   [
//     {
//       question:
//         "Which of the following is among the Seven Wonders of the world?",
//       option: [
//         { text: "A. Hanging Gardens of Babylon" },
//         { text: "B. The Great Wall of China", correct: false },
//         { text: "C. Machu Picchu", correct: false },
//         { text: "D. Victoria falls", correct: false },
//       ],
//       correct: 0,
//     },
//   ],
//   [
//     {
//       question: "The Sun is a Planet. True or False?",
//       option: [
//         { text: "A. True", correct: false },
//         { text: "B. False", correct: true },
//       ],
//     },
//   ];
