var questions = [
  {
    question: "In web design, what does CSS stands for?",
    options: {
      opt1: "Counter strike: source",
      opt2: "Corrective style sheet",
      opt3: "Computer style sheet",
      opt4: "Cascading style sheet",
    },
    correctAnswer: "Cascading style sheet",
  },

  {
    question: "HTML stands for?",
    options: {
      opt1: "Hyper Text Transfer Protocol",
      opt2: "Hyper Transfer Mark-up Language",
      opt3: "Hyper Text Mark-up Language",
      opt4: "Hyper Text Mark-up Location",
    },
    correctAnswer: "Hyper Text Mark-up Language",
  },

  {
    question: "HTTP stands for?",
    options: {
      opt1: "Hyper Text Transfer Protocol",
      opt2: "Hyper Transfer Text Protocol",
      opt3: "Hyper Text Transfer Position",
    },
    correctAnswer: "Hyper Text Transfer Protocol",
  },

  {
    question: "what is the alphabet after C",
    options: {
      opt1: "B",
      opt2: "D",
      opt3: "A",
      opt4: "E",
    },
    correctAnswer: "D",
  },

  {
    question: "what is your name",
    options: {
      opt1: "Favour",
      opt2: "Naza",
      opt3: "Chioma",
      opt4: "Dera",
    },
    correctAnswer: "Favour",
  },
];

var question = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var previousBtn = document.getElementById("previous");
var nextBtn = document.getElementById("next");
var answers = document.querySelectorAll(".answers");
var result = document.getElementById("result");

var questionIndex = 0;
var score = 10;

function quizOperation(index) {
  question.innerHTML = questions[index].question;
  opt1.innerHTML = questions[index].options.opt1;
  opt2.innerHTML = questions[index].options.opt2;
  opt3.innerHTML = questions[index].options.opt3;
  opt4.innerHTML = questions[index].options.opt4;
}

function next() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].parentElement.classList.remove("active");
  }

  if (questionIndex < questions.length) {
    questionIndex++;
    quizOperation(questionIndex);
  } else {
    result.innerHTML = score;
  }
}
nextBtn.addEventListener("click", next);

function previous() {
  if (questionIndex > 0) {
    questionIndex--;
    quizOperation(questionIndex);
  }
}
previousBtn.addEventListener("click", previous);

function selectAnswer(e) {
  // var answers = document.querySelectorAll("answers")

  for (let i = 0; i < answers.length; i++) {
    answers[i].parentElement.classList.remove("active");
  }
  e.target.parentElement.classList.add("active");

  var answer = questions[questionIndex].correctAnswer;
  var selectedAnswer = e.target.innerHTML;

  if (answer === selectedAnswer) {
    score += 10;
  } else {
    // alert("incorrect")
  }
}

opt1.parentElement.addEventListener("click", selectAnswer);
opt2.parentElement.addEventListener("click", selectAnswer);
opt3.parentElement.addEventListener("click", selectAnswer);
opt4.parentElement.addEventListener("click", selectAnswer);

quizOperation(questionIndex);
