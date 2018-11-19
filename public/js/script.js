document.addEventListener('DOMContentLoaded', (e) => {
	e.preventDefault();

	let number = Math.floor(Math.random()*10)+1;
	var guess = document.getElementById('guess');

	var main = document.getElementById('main');


	document.addEventListener('keyup', function(event){
		
		var key = event.key;
		if(key === "Enter"){
			checkAnswer();
		} else {
			guess.append(key);
		}
	});


	function randNumber (ans) {
		main.append(ans);
	}
	randNumber(number);


	
	function checkAnswer(){
		var input = document.getElementById('guess').innerText;
		number = JSON.stringify(number);

		if(input === number){
			var win = document.createElement('h1');
			var w = document.createTextNode('YOU WIN!!!');
			win.append(w);
			main.append(win);
			setTimeout(function(){
				win.remove();
				guess.removeChild(guess.firstChild);

			}, 2000)
		} else {
			var loss = document.createElement('h1');
			var l = document.createTextNode('YOU LOSE!!!');
			loss.append(l);
			main.append(loss);
			setTimeout(function(){
				loss.remove();
				guess.removeChild(guess.firstChild);
				randomNumber()
			}, 2000)
		}
	}

	var date = new Date();
		var dateNow = date.getFullYear();

	function Person(name, born, year){
		this.name = name;
		this.born = born;
		this.year = year;

		this.age = function(){
			return this.year - this.born
		};
	}

	var me = new Person('kevin Jr', 1991, dateNow );

	var d = document.getElementById('debt');
		var per = me.name + ' age: ' + me.age();
		d.textContent = per;

	var e = document.getElementById('e');
	var eric = new Person('eric h', 1995, dateNow);
		elE = eric.name + ' age: ' + eric.age();
		e.textContent = elE;

	var b = document.getElementById('b');
		var brian = new Person('brian h', 1994, dateNow);
			elB = brian.name + ' age: '+ brian.age();
		b.textContent = elB;
		

	var elDate = document.getElementById('footDate');
		elDate.textContent = dateNow;

});