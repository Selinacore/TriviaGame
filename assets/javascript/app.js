// make a list of trivia questions and answers
// figure out how to use radio buttons w/ or w/o bootstrap form
// create on click function to start game
// make and set timer to count down from 60 seconds
// set alert for TIMES UP!


$(document).ready( function() {
// trivia questions

var questions = [
{
    question: "Leatherface was a character in what horror film?",
    answers: ["Carrie",  "The Shinning", "Halloween", "The Texas Chainsaw Massacre"], 
},
{
    question: "In what movie trilogy did the actress who played the main character die part way through the making of the third one?",
    answers: ["Friday the 13th", "Poltergeist", "Halloween", "The Ring"],
},
{
    question:"What movie contained the quote: 'All work and no play makes Jack a dull boy.'?",
    answers: ["Saw", "The Excorsist", "Scary Movie", "The Shinning"],
},
{
    question:"In The Exorcist, what was the little girl's name?",
    answers: ["Regan", "Susie", "Katherine", "Sara"],
},
{
    question: "Which horror flick was set at a summer camp?",
    answers: ["Scream", "Friday the 13th", "Nightmare on Elm St.", "Dawn of the dead"],
},
{
    question: "Which horror movie character is a serial killer possessing a doll?",
    answers: ["Night of the living dead", "Chucky", "IT", "Psycho"],
},
{
    question: "In the movie Carrie, how does Carrie kill her mother?",
    answers:["Burns her", "Hangs her", "Stabs her","Shoots her"],
},
{
    question: "What is Michael Myers middle name?",
    answers: ["Thomas", "Anthony", "Chris","Audrey"],
}]

// tracking questions variables
var trackQuestion = 0;
var correct = 0;
var wrong = 0;
var none = 0;  //unanswered


// click to start game
$("#start").on("click", function() {
   
   })


//  Set up the timer.


    var timeRem = $("#time-left")
    function start()
        timeRem = setTimeout (60 * 1000);
    
    function timer() {
        timeRem--;
        $("#time-left").html("<h3>60 seconds remaining</h3>");
        console.log("60 seconds remaining");
    }


      
    
    

    

});