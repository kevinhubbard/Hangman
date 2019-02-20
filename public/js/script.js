document.addEventListener('DOMContentLoaded', (e) => {
	e.preventDefault();
	var gameOutput = document.getElementById('gameOutput');
	var guessEle = document.getElementById('guess');
	var inputEle = document.getElementById('userInput');
	var hint = document.getElementById('hint');
	var guesses = document.getElementById('guesses');
	var guessLeft = 7;
	var keyInput = [];
	var ansLog = [];
	var words = ['cat', 'dog', 'chicken', 'pig', 'horse', 'turtle', 'fish', 'cow', 'bear'];
	var ans = randomWord();
	guessEle.textContent = guessLeft;




	function randomWord() {
		var randWord = words[Math.floor(Math.random() * words.length)];
		console.log(`The answer will be: ${randWord}.`);

		for(i=0; i<randWord.length; i++){
			ansLog.push(randWord[i]);
		}
		hint.textContent = randWord;
		console.log(ansLog);
		return randWord
	}


	document.addEventListener('keyup', function(event) { //listens to user key press
		var key = event.key;
		
		if (ans.includes(key)) { //if user input is in answer alert user
			
			for(var i = ansLog.length-1; i>-1; i--){
				if(ansLog[i] === key){
					ansLog.splice(i,1);
					console.log(ansLog);
				}
			}

			if(ansLog.length === 0){ //check to see if game has been won
				console.log('congrats you won word was ' + ans);
				
				window.setTimeout(function(){reset();}, 3000); //resets game
			} else {	//update player with game info
			inputEle.textContent = key + ' is in the answer';
			guessEle.textContent = guessLeft;
			}		
		} else { //alert user if guess is not in word and subtract guess
			guessLeft--;
			keyInput.push(key); //adds user input to array
			if (guessLeft === 0) {
				guessEle.textContent = guessLeft;
				gameOutput.textContent = 'you lost the word was ' + ans;
				window.setTimeout(function(){reset();}, 3000); //resets game
			} else {
				guesses.textContent = keyInput;
				inputEle.textContent = key + ' is in not the answer ';
				guessEle.textContent = guessLeft;
			}

		}
	});

	function reset(){
		guessLeft = 7;
		keyInput = [];
		ansLog = [];
		guessEle.textContent = guessLeft;
		gameOutput.textContent = '';
		inputEle.textContent = '';
		guesses.textContent = '';
		ans = randomWord();
	}

});