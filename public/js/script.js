document.addEventListener('DOMContentLoaded', (e) => {
	e.preventDefault();
let number = Math.floor(Math.random()*10)+1;
	function randNumber () {
		
		var main = document.getElementById('main');

		main.append(number);
	}

	randNumber();

	
		var output = document.getElementById('input');
		document.addEventListener('keyup', function(event){
			var key = event.key;
			if(key === "Enter"){
				checkAnswer();
			} else {
				output.append(key);
			}
		});
	
	function checkAnswer(){
		console.log(output);
		number = number.toString();
		output = output.toString();
		if(output == number){
			console.log('you win');
		} else {
			console.log('you LOSE');
			console.log('guess =' + typeof(output) + '\n num = ' + typeof(number) );
		}
	}
});