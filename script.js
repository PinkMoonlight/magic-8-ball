$(document).ready(function(){
	
var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", 
"If you believe in yourself then yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, Try again", 
"Ask again later", "It is better I don't tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", 
"In your dreams", "My sources say no", "Outlook not so good", "When Pigs Fly!"]; 
	
$("#answer").hide();

magic8Ball.questionInput = function(question)
{
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
$("#answer").fadeIn(4000);
var random = Math.random();
var randomNumberArray = random * this.listOfAnswers.length;
var round = Math.floor(randomNumberArray);
var randomAnswer = magic8Ball.listOfAnswers[round];

	$("#answer").text(randomAnswer);
	console.log("Question: " + question);
	console.log(randomAnswer);
};
	
var onclick = function() {
$("#answer").hide();
$("#8ball").effect("shake");
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	
	setTimeout(
		function() {
var question = prompt("Ask me a YES/NO question", "e.g. Will it rain tomorrow?");
	 if (question != null) {
	 magic8Ball.questionInput(question);}
	  }, 500);	
	};
	
$("#questionButton").click(onclick);
});