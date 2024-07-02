const quizData = [
  {
      question: "The powerful weapon  Trisul is associated with which deity?",
      options: ["Shiv", "Vishnu", "Ganesh", "Brahma"],
      answer: "Shiv"
  },
  {
      question: "Elections to panchayat in state are regulated by ?",
      options: ["Gram panchayat", "Nagar Nigam", "Election commission of india", "State Election Commission"],
      answer: "State Election Commission"
  },
  {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
  },
  {
    question: "The Worlds 5G mobile network was lunched by which country?",
    options: ["India", "South korea", "Asia", "Japan"],
    answer: "South korea"
 },
 {
  question: "Which of the folk dance is associated with gujurat?",
  options: ["Odissi", "Garba", "Kathakali", "Bangra"],
  answer: "Mars"
 }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submitBtn');

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionElement.textContent = q.question;

  optionsElement.innerHTML = '';
  q.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option');
      optionsElement.appendChild(button);
  });

  submitButton.disabled = true;
}

function checkAnswer(selectedOption) {
  const correctAnswer = quizData[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
      score++;
      resultElement.textContent = "Correct!";
  } else {
      resultElement.textContent = `Wrong! The correct answer was: ${correctAnswer}`;
  }
  submitButton.disabled = false;
}

optionsElement.addEventListener('click', function(e) {
  if (e.target.classList.contains('option')) {
      const selectedOption = e.target.textContent;
      checkAnswer(selectedOption);
  }
});

submitButton.addEventListener('click', function() {
  currentQuestion++;
  resultElement.textContent = '';
  if (currentQuestion < quizData.length) {
      loadQuestion();
  } else {
      quizOver();
  }
});

function quizOver() {
  questionElement.textContent = `Quiz Over! Your score is: ${score}/${quizData.length}`;
  optionsElement.innerHTML = '';
  submitButton.style.display = 'none';
}
  
loadQuestion();
