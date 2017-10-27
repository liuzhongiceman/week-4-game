// Speudo coding

$(document).ready(function(){
	var Random= Math.floor(Math.random()*101+19);
	//selects a random number to be shown at the start of the game
	//number should be between 19 - 120
	$("#targetScore").text(Random);
	// Appending random number to be the targetNumber id in the html doc

	var image1Score = Math.floor(Math.random()*11+1);
	var image2Score = Math.floor(Math.random()*11+1);
	var image3Score = Math.floor(Math.random()*11+1);
	var image4Score = Math.floor(Math.random()*11+1);
	// setting random number for each image
	// random number has to be between 1-12

	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	
	// declare the variable
	$("#winCounter").text(wins);
	$("#loseCounter").text(losses);
	
	//resets the game
	function reset(){
		Random= Math.floor(Math.random()*101+19);
		$("#targetScore").text(Random);
		image1Score = Math.floor(Math.random()*11+1);
		image2Score = Math.floor(Math.random()*11+1);
		image3Score = Math.floor(Math.random()*11+1);
		image4Score = Math.floor(Math.random()*11+1);
		totalScore = 0;
		$("totalScore").text(totalScore);
	}

	// add the wins to the winCounter
	function win(){
		alert("You Won!");
		wins++;
		$("#winCounter").text(wins);
		reset();
	}

	//add the losses to the lostCounter
	function loser(){
		alert("You Lost!");
		losses++;
		$("#loseCounter").text(losses);
		reset();
	}

	//set up click for crystal
	$("#image1").on('click',function(){
		totalScore = totalScore + image1Score;
	    $("#chosenScore").text(image1Score);
		$("#totalScore").text(totalScore);
		if(totalScore == Random){
			win();
		}
		else if( totalScore > Random){
			loser();
		}
	})

	$("#image2").on('click',function(){
		totalScore = totalScore + image2Score;
		$("#chosenScore").text(image2Score);
		$("#totalScore").text(totalScore);
		if(totalScore == Random){
			win();
		}
		else if( totalScore > Random){
			loser();
		}
	})

	$("#image3").on('click',function(){
		totalScore = totalScore + image3Score;
		$("#chosenScore").text(image3Score);
		$("#totalScore").text(totalScore);
		if(totalScore == Random){
			win();
		}
		else if( totalScore > Random){
			loser();
		}
	})

	$("#image4").on('click',function(){
		totalScore = totalScore + image4Score;
		$("#chosenScore").text(image4Score);
		$("#totalScore").text(totalScore);

		if(totalScore == Random){
			win();
		}
		else if( totalScore > Random){
			loser();
		}
	});

});


