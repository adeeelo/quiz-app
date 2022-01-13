var displayquestion = document.getElementById("displayquestion")
var answerparent = document.getElementById("answerparent")
var currentquestion = document.getElementById("currentquestionnumber")
var totalquestion = document.getElementById("totalquestionnumber")
var questiondisplay = document.getElementById("questiondisplay")
var resultdisplay = document.getElementById("resultdisplay")
var indexvalue = 0;
var marks = 0;

var questions = [

    {
        question: " HTML Standsfor __________.",
        options: ["Hyper text markup language", "html", "html", "html"],
        correctans: "Hyper text markup language"

    },
    {
        question: " css Standsfor __________.",
        options: ["css", "html", "html", "html"],
        correctans: "css"

    },
    {
        question: " js Standsfor __________.",
        options: ["js", "html", "html", "html"],
        correctans: "js"

    },
    {
        question: " RAM Standsfor __________.",
        options: ["RAM", "html", "html", "html"],
        correctans: "RAM"

    },
    {
        question: " ROM Standsfor __________.",
        options: ["ROM", "html", "html", "html"],
        correctans: "ROM"

    },
    {
        question: " DOM Standsfor __________.",
        options: ["DOM", "html", "html", "html"],
        correctans: "DOM"

    },

];


function renderQuestion() {
    displayquestion.innerHTML = questions[indexvalue].question;
    for (i = 0; i < questions[indexvalue].options.length; i++) {
        var optvalue = questions[indexvalue].options[i];
        var corrvalue = questions[indexvalue].correctans;

        answerparent.innerHTML += `  <div class="col-6 mt-3 py-2 p-2  m-3  ">
        <button onclick="checkquestion( '${optvalue}', '${corrvalue}')"
         type=" button" class="buten  m-3 fw-bolder col-5 btn mx-5 btn-primary" style="background-color:#A6CACC ; color:#06425B;border: none; border-radius: 8px;">
        ${questions[indexvalue].options[i]}
        </button>
   </div>`
    }
    totalquestion.innerHTML = questions.length;
    currentquestion.innerHTML = indexvalue + 1;
}


renderQuestion();


function nextquestion() {
    answerparent.innerHTML = "";
   
    indexvalue++;
    if (indexvalue == questions.length) {
        alert(`Your result is ${marks}`);
             resultdisplay.style.display = "block";
             questiondisplay.style.display ="none";
    }     renderQuestion();

    }


function checkquestion(optionvalue, correctvalue) {
    if (optionvalue == correctvalue) {
        marks++;
        console.log(marks);

    }
    nextquestion();
}
















