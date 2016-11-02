// Array of trivia data
var questions = new Array();
questions[0] = 'Which sci-fi movie did Steven Spielberg NOT direct?';
questions[1] = 'Who plays Khan in Star Trek II: the Wrath of Khan ?';
questions[2] = 'Which of these items is NOT one of the parts of E.T.\s phone';
questions[3] = 'How does Han save Luke at the start of "The Empire Strikes Back"?';
questions[4] = 'Leonardo DiCaprio plays this character in "Inception", a film about shared dreaming';
questions[5] = 'This character predicts the coming of The One in "The Matrix"';
questions[6] = 'What\s RoboCop\s real name?';
questions[7] = 'How many gigawatts of electricity does Doc Brown need to send Marty back to the future?';
questions[8] = 'Light Cycles race across the screen in this Disney sci-fi film from 1982';
questions[9] = 'How many humans die due to Schwarzenegger in "Terminator 2: Judgment Day"';

var choices = new Array();
choices[0] = ['Minority Report', 'Blade Runner', 'Artifical Intelligence', 'War of the World'],
choices[1] = ['Christopher Walken ', 'Robert Deniro', 'Ricardo Montalban', 'george Takai'],
choices[2] = ['Coffee Can', 'Flashlight', 'Speak and Spell', 'Umbrella'];
choices[3]  = ['He gives him CPR', 'HE STUFFS HIM IN A DEAD TAUNTAUN', 'He chokes Jabba da Hutt', 'He tells Darth Vader that "Siths Suck"',]
choices[4]  = ['Authur', 'Carter', 'Dom', 'Cobb',]
choices[5]  = ['The Oracle', 'The Prophet', 'Cypher', 'Agent Smith',]
choices[6]  = ['Morris', 'Jackson', 'Miller', 'Murphy',]
choices[7]  = ['2.12', '2.11', '1.21', '1.22',]
choices[8]  = ['Blade Runner', 'Return of the Jedi', 'The last Starfighter', 'Tron',]
choices[9]  = ['0', '3', '12', '15',]


var answers = new Array();
answers[0] = ['Blade Runner'],
answers[1] = ['Ricardo Montalban'],
answers[2] = ['Flashlight'],
answers[3] = ['He stuffs him in a dead tauntaun']
answers[4] = ['Cobb']
answers[5] = ['The Oracle']
answers[6] = ['Murphy']
answers[7] = ['1.21']
answers[8] = ['Tron']
answers[9] = ['0']

var timeLeft = 60;
var elem = document.getElementById('countDown');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}


var score = 0;
i= 0;

var listQuestion = function(){  
    if(i<questions.length){
        document.getElementById("myDiv1").innerHTML = '<p>'+questions[i]+'</p>';
        var choicesOutput=[];//new Array()
        for (var k=0; k<choices[i].length; k++){
            choicesOutput.push(
                '<p><input type = "radio" name ='
                +' "questionchoice">'+choices[i][k]+'</p>');
        }
        document.getElementById("myDiv2").innerHTML =choicesOutput.join("");
        document.getElementById("myDiv3").innerHTML = 
            '<p><button onClick = "getRadioValue()">Check</button></p> <br>';
    }
};
var getRadioValue = function(){
    var value = '';
    for (var h = 0; 
        h < document.getElementsByName('questionchoice').length; h++){
        if (document.getElementsByName('questionchoice')[h]
            .checked==true){
            value = document.getElementsByName('questionchoice')[h].value;
            score++;
        }
    }
    if (value== answers[i]){
        document.getElementById("myDiv4").innerHTML =
            "That is correct. </br><button input type = "
            +"'submit' onClick = 'loadContent()'> Next Question</button>";
    }
    else {
        document.getElementById("myDiv4").innerHTML ="That is incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent()'> N"
           +"ext Question</button>"; 
    }
    i++;
};
var whatIsScore = function(){
    return score; 
};
function loadContent(){
    document.getElementById("myDiv4").innerHTML="";
    listQuestion();
}
window.onload = listQuestion;