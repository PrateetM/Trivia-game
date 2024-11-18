const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Mark Twain"],
      answer: "William Shakespeare",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const totalElement = document.getElementById("total");
  const restartButton = document.getElementById("restart-btn");
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.classList.add("option");
      li.addEventListener("click", () => selectOption(option));
      optionsElement.appendChild(li);
    });
  }
  
  function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");
  
    options.forEach((option) => {
      option.removeEventListener("click", () => selectOption(option.textContent));
      if (option.textContent === currentQuestion.answer) {
        option.style.backgroundColor = "#4CAF50"; // Correct answer
      } else if (option.textContent === selectedOption) {
        option.style.backgroundColor = "#f44336"; // Selected wrong answer
      }
    });
  
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
    nextButton.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      nextButton.style.display = "none";
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = score;
    totalElement.textContent = questions.length;
  }
  
  function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    showQuestion();
    nextButton.style.display = "none";
  }
  
  nextButton.addEventListener("click", nextQuestion);
  restartButton.addEventListener("click", restartGame);
  
  showQuestion();
  