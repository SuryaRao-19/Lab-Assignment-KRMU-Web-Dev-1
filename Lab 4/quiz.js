// 1. Quiz Questions Array (each item is an object)
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "Which tag is used to include JavaScript in HTML? (example: <____ src='app.js'>)",
    answer: "script"
  },
  {
    question: "Which keyword creates a variable in modern JavaScript?",
    answer: "let"
  },
  {
    question: "Which function shows a popup message to the user?",
    answer: "alert"
  },
  {
    question: "Which function is used to take text input from the user?",
    answer: "prompt"
  }
];

// 2. Function to run the quiz
function runQuiz() {
  let score = 0; // 3. Score starts at 0

  alert("Welcome to Prompt Quizzer!\nAnswer the questions to test your basic JS knowledge.");

  // 4. Loop through all questions
  for (let i = 0; i < quizQuestions.length; i++) {
    const currentQ = quizQuestions[i];

    // 5. Ask the question using prompt()
    let userInput = prompt("Question " + (i + 1) + ": " + currentQ.question);

    // If the user cancels
    if (userInput === null) {
      alert("You skipped this question.");
      continue;
    }

    // 6. Normalize input using lowercase + trim
    userInput = userInput.toLowerCase().trim();

    // 7. Check answer
    if (userInput === currentQ.answer) {
      score++;
      alert("Correct! 👍");
    } else {
      alert("Wrong ❌\nCorrect answer: " + currentQ.answer);
    }
  }

  // 8. Show final score
  alert(
    "Quiz Completed!\nYour Score: " +
    score +
    " / " +
    quizQuestions.length
  );
}

// 9. Run the quiz
runQuiz();
