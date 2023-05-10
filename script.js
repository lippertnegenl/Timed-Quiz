var startEl = document.querySelector("#start");
var titleEl = document.querySelector("#title");
var optionsEl = document.querySelector("#options");


var count = 60;

var questionIndex = 0;

var questionArray = [
    {
        questionText: "What color is my dog?",
        answer:["Brown", "Black", "White", "Green", "Blue", "Golden"],
        correctAnswer: "white"
    },
    {
        questionText: "How many legs does my dog have?",
        answer:["One", "Two", "Three", "Four", "Five", "Zero"],
        correctAnswer: "Four"
    },
    {
        questionText: "How many tails does my dog have?",
        answer:["One", "Two", "Three", "Four", "Five", "Zero"],
        correctAnswer: "One"
    },
    {
        questionText: "How many puppies does my dog have?",
        answer:["One", "Two", "Three", "Four", "Five", "Zero"],
        correctAnswer: "Four"
    },
    {
        questionText: "How many ears does my dog have?",
        answer:["One", "Two", "Three", "Four", "Five", "Zero"],
        correctAnswer: "Two"
    },
    {
        questionText: "What breed is my dog?",
        answer:["Lab", "Retriever", "Pitbull", "Bulldog"],
        correctAnswer: "Retriever"
    }
]
console.log(questionArray[questionIndex].answer[1])
console.log(questionArray[questionIndex].questionText)

function timer() {
 var timerEl= document.getElementById("quiz");
 	timerEl.textContent = count;
    count = count - 1;
}

function renderQuestions(){
    var currentQuestion = questionArray[questionIndex];
    titleEl.textContent=currentQuestion.questionText;

    //clear out old question choices
    optionsEl.innerHTML = ""
    for(var i=0; i < currentQuestion.answer.length; i++){
        var choice = currentQuestion.answer[i]; 
        var choiceEl = document.createElement("button")
        choiceEl.setAttribute("value", choice)
        choiceEl.textContent = choice
        //display on the page
        optionsEl.appendChild(choiceEl)
        
    }
}

function questionClick(event){
    var buttonEl = event.target
    console.log(buttonEl.value)
    if(buttonEl.value !== questionArray[questionIndex].correctAnswer){
        count=count-15
    }
    questionIndex++;
    if (count <= 0 || questionIndex === questionArray.length) {
        //quizEnd();
      } else {
        renderQuestions()
      }
}

function start (){
    console.log("hello world");
    setInterval(timer, 1000);
    //questionIndex++;
    renderQuestions();
}

optionsEl.addEventListener("click", questionClick)

startEl.addEventListener ("click", start)