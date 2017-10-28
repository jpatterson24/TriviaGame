
window.onload = function() {
	
		//on click for the start of the game
		$("#start").on("click",start) 
		//on click for the stop of the game
		$("#stop").on("click", stop);
		//on click for the reset of the game
		$("#reset").on("click", reset);

		//Global variables
		var questions = ["A function cannot be defined inside another function","functions cannot return more than one value at a time","functions can be called either by a value or reference"];	
		var answers = ["true", "false","true"];
		// var i = questions[i];
		var intervalId;
		var gameRunning = false;
		var number = 60;
		var gameTime = intervalId;
		var question = 0;
    var answer=0;
		// var questions = [
		// {question: ["is this true"],
		//  answer: true},
		// {question: ["this is not true"],
		//  answer: false},
		// {question: ["not sure what to say"],
		//  answer: true},
		// ];
		

  //start of the game function		
  function start() {
      intervalId = setInterval(decrement, 1000);
    }

//time decrementor
function decrement() {
	number--;

	$("#timeRemaining").html("<h2>" + "Time Remaining: " + number + "</h2>")
		if (number ===0 || number < 3){
			stop();
			alert("Time Up!");
	 }
	}

//stop function of the game
function stop() {
	clearInterval(intervalId);
}

//start function initialized
start();
 loadQuestions(); 
// reset();
//for loop for the array of questions
 reset();
function loadQuestions(){
// 	 $('#myForm input').on('change', function() {
  // var val = $('input[name=question]:checked').val();
  // cons
// })

	


 //  $("#triviaQuestions").html("<h2>" + "Question #1: " + questions[0] + "</h2>");
 // // $( "input[value]" ).click(function() {
 // 	$('#myForm input').on('change', function() {
 //  		var val = ($('input:radio[name=question]:checked').val());
  		
 //  		if(val === true){
 //  			answer++;
 //  			console.log(answer);
 //  		} 
 // $( "input[value]" ).click(function() { 		
  $("#triviaQuestions").html("<h2>" + "Question #1: " + questions[0] + "</h2>");
  $('#myForm input').on('change', function() {
     var val = ($('input:radio[name=question]:checked').val());
      if(val === true){
        answer++;
        console.log("#triviaQuestions");
            }
}),

  $("#triviaQuestionsTwo").html("<h2>" + "Question #2: " + questions[1] + "</h2>");
  	$('#myForm input').on('change', function() {
  		var val = ($('input:radio[name=question]:checked').val());
  		
  		if(val === true){
  			answer++;
  			console.log(answer);
  		  		}
})


  $("#triviaQuestionsThree").html("<h2>" + "Question #3: " + questions[2] + "</h2>");
  	$('#myForm input').on('change', function() {
  		var val = ($('input:radio[name=question]:checked').val());
  		  if(val === true){
    			answer++;
    			console.log(answer);
  		}
  		  else if(answer === 3){
  			 alert("You Win !!!");
  		} else {
  		  	alert("You Loose Sorry");
  		}
  	})
  }
}
 
//game reset function
    function reset() {
    //game time interval
    number = 60;
    //game.question = 0;

    //  TODO: Change the "display" div to "00:00."
      $("#timeRemaining").html("00:00");
    }

    
 function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
    }

function count(){
	number--;
	var currentTime = number.timeConverter(number);
	$("#timeRemaining").html(currentTime)
	console.log(currentTime);

}






    











		