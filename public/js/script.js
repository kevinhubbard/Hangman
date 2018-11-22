document.addEventListener('DOMContentLoaded', (e) => {
	e.preventDefault();
	var gameOutput = document.getElementById('gameOutput');
	var guessEle = document.getElementById('guess');
	var inputEle = document.getElementById('userInput');
	var hint = document.getElementById('hint');
	var guessLeft = 4;
	var keyInput = [];
	var words = ['one', 'two', 'three'];
	var ans = randomWord();
	guessEle.textContent = guessLeft;


	function randomWord() {
		var randWord = words[Math.floor(Math.random() * words.length)];
		console.log(`The answer will be: ${randWord}.`);
		return randWord
	}



	document.addEventListener('keyup', function(event) { //listens to user key press
		var key = event.key;
		keyInput.push(key); //adds user input to array
		console.log(keyInput);
		if (ans.includes(key)) { //if user input is in answer alert user
			inputEle.textContent = key + ' is in the answer';
			guessEle.textContent = guessLeft;
		} else { //alert user if guess is not in word and subtract guess
			guessLeft--;
			if (guessLeft === 0) {
				guessEle.textContent = guessLeft;
				gameOutput.textContent = 'you lost the word was ' + ans;
				window.setTimeout(function(){reset();}, 3000); //resets game
			} else {
				
				inputEle.textContent = key + ' is in not the answer ';
				guessEle.textContent = guessLeft;
			}

		}
	});

	function reset(){
		guessLeft = 4;
		keyInput = [];
		guessEle.textContent = guessLeft;
		gameOutput.textContent = '';
		inputEle.textContent = '';
		ans = randomWord();
	}

});