const question = document.queryselector('#question');
const choices = Array.from(document.queryselector('.choice-text')); 
const progressText = document.queryselector('#progressText'); 
const scoreText = document.queryselector('#score');
const progressBarFull = document.queryselector('#progressBarFull');

let currentquestion= {}
let acceptingAnswers = true 
let score = 0
let questionCounter= 0
let availableQuestions= []

let questions = [
  {
    question:"What is the name of the strain that causes COVID-19?",
    choice1:'SARS-Cov-2',
    choice2:'Influenza A',
    answer: 2,
  },
    {
    question:"Which of the following are symptoms of COVID-19?",
    choice1:'Coughing',
    choice2:'Sneezing',
    choice3:'Sore & Dry throat',
    choice4:'Trouble breathing',
    choice5:'None of the above',
    choice6:'All of the above',
    answer: 6,
  },
    {
    question:"Which of the following is a precaution we can take toward the COVID-19 pandemic?",
    choice1:'Wearing a mask',
    choice2:'Completing proper research about the vaccine',
    choice3:'Scheduling a vaccine appointment at a local pharmacy',
    choice4:'Keeping a social distance of 6 feet',
    choice5:'All of the above',
    answer: 5,
  },
    {
    question:"How does the COVID-19 virus spread?",
    choice1:'Touching our eyes, nose, and mouth without washing our hands',
    choice2:'Staying a safe social distance from family and friends',
    choice3:'In large crowds',
    choice4:'Getting tested frequently',
    choice5:'A&C',
    choice6:'B&D',
    answer: 5,
  },
    {
    question:"What should you do if you experience COVID-19 like symptoms?",
    choice1:'Wait for them to see if they become worse',
    choice2:'Stay at home',
    choice3:'Call your doctor',
    choice4:'Contact the emergency room',
    choice5:'B,C,D',
    choice6:'None of the above',
    answer: 4,
  },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5 

function startGame = () => {
function questioncounter = 0,
score = 0
availableQuestions = [...questions] 
getNewQuestion()
}

getNewQuestion = () {
  if(availableQuestions.length === 0 || questioncounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)
    
    return window.location.assign('/end.html')
  }
  
  questionCounter++
  progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
  progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS)* 100}%'
  
  const questionsIndex = Math.floor(Math.random()* availableQuestions.length)
  currentQuestion = availableQuestions [questionsIndex]
  question.innerText = currentQuestion.question
  
  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })
  
  availableQuestions.splice(questionsIndex, 1)
  
  acceptingAnswers = true
}

choices.forEach(choice =  {
  choice.addEventListener('clcik', e = {
  if(!acceptingAnswers) return

acceptingAnswers = false
const selectedChoice = e.target
const selectedChoice = selectedChoice.dataset['number']

let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
'incorrect'

if(classtoApplu === 'correct') {
  incrementScore(SCORE_POINTS)
}

selectedChoice.parentElement.classList.add(classToApply)

setTimeout(() => {
  slectedChoice.parentElement.classList.remove(classToApply)
  getNewQuestion()
  
}, 1000)

})

})

incrementScore = num => {
  score +=num
  scoreText.innerText = score
  
}

startGame()