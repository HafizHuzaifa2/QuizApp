var QuestionForQuiz = document.getElementById("QuestionForQuiz");
var Options = document.getElementById("Options");
var QuestionNo = document.getElementById("QuestionNo");
var TotalQuestion = document.getElementById("TotalQuestion");
var results = document.getElementById("result");
var inval = 0
var mark = 0

var questions = [
    {
        questionss: "HTML stands for _____________",
        Optionss: [ "Hyper Text Markup Language", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML" ],
        CorrectOpt: "Hyper Text Markup Language"
    },
    {
        questionss: "CSS stands for _____________",
        Optionss: [ "Critical Style Sheet", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML" ],
        CorrectOpt: "Critical Style Sheet"
    },
    {
        questionss: "RAM stands for ______________",
        Optionss: [ "Random Access Memory", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML" ],
        CorrectOpt: "Random Access Memory"
    },
    {
        questionss: "ROM stands for _____________",
        Optionss: [ "Read Only Memory", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML" ],
        CorrectOpt: "Read Only Memory"
    },
    {
        questionss: "RAM stands for ______________",
        Optionss: [ "Random Access Memory", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML" ],
        CorrectOpt: "Random Access Memory"
    },
    {
        questionss: "ROM stands for _____________",
        Optionss: [ "Read Only Memory", "Hyper Tag Markup Leaque", "Hyper Text Magnitude", "HTML" ],
        CorrectOpt: "Read Only Memory"
    },
]
function Rendered () {


    
    QuestionForQuiz.innerHTML = questions[inval].questionss
    
    for (var i = 0; i < questions[inval].Optionss.length; i++){
        var opts = questions[inval].Optionss[i]


        Options.innerHTML += `<div class="col-md-6">
        <button onclick=" CheckQuest('${questions[inval].Optionss[i]}','${questions[inval].CorrectOpt}') " class="btn btn-primary rounded-pill fw-bold m-3   w-100 shadow">${opts}</button>
    </div>`
    }
    TotalQuestion.innerHTML = questions.length 

    QuestionNo.innerHTML = inval + 1 



}

Rendered()

function Nexts(){

   Options.innerHTML = ""
    if(inval + 1 == questions.length ){

        
      var  total = mark * 100 / questions.length
        total = total.toFixed(2)

       percentage.innerHTML = total

        document.getElementById("firstpage").style.display = "none"
        document.getElementById("results").style.display = "block"
     }else{
        
        inval++;
        Rendered()
    }


}


function CheckQuest(optio,correct){

    if(optio == correct){
        
         mark++
    }
    
      console.log(mark)
      Nexts()



}


