
let review = localStorage.getItem("review");
review.parse = JSON.parse(review);
console.log(review);

	var indexTimer = 0;
	var mins = newstunde.lesson1.elemente[indexTimer].zeit;
	var seconds = mins * 60;
	var gesamtMinuten = newstunde.lesson1.elemente[indexTimer].zeit;
	var names = newstunde.lesson1.elemente[indexTimer].namen;
	var timestart = Date.now();
	console.log(timestart);
	var percent;
	var dieserTimer;
	var anzahl = newstunde.lesson1.anzahl;
	//document.getElementById("demo1").innerHTML = text;
	console.log("newstunde.lesson1.elemente.length"+newstunde.lesson1.elemente.length);
	console.log(anzahl);
	review.push = {[timestart]:[{"lesson":"lesson1"}]};
	console.log(review);

window.onload = function () {
	loadLessonPlan();
	display = document.querySelector('#time');
	startTimer(seconds, display, percent, gesamtMinuten);
	
};

function loadLessonPlan() {
	let unterrichtsStunde = localStorage.getItem("stunde");
	newstunde = JSON.parse(unterrichtsStunde);
	console.log(newstunde.lesson2.elemente[0].namen);
};

function startTimer(duration, display,percent,gesamtMinuten,indexTimer) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        
        percent = (((gesamtMinuten*60.0)-diff)/(gesamtMinuten*60.0))*100;
    	  console.log("Prozent: "+percent);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

	document.getElementById("names").innerHTML = names;
        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
				clearInterval(dieserTimer);
        }
        else {
        		colorchange(percent);
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    dieserTimer = setInterval(timer, 1000);
};

function iterateLessonElement() {
	//Button bzw. swipe aktiviert
	nameStunde = names;
	timestamp = Date.now();
	review.[timestart].push({"nameStunde":nameStunde, "timestamp":timestamp});
	console.log(review);
	console.log("Index "+indexTimer);
	indexTimer = indexTimer + 1;
	console.log("Index " +indexTimer);
	clearInterval(dieserTimer);
	mins = newstunde.lesson1.elemente[indexTimer].zeit;
	gesamtMinuten = newstunde.lesson1.elemente[indexTimer].zeit;
	names = newstunde.lesson1.elemente[indexTimer].namen;
	seconds = mins * 60;
	console.log(mins);
	console.log(names);
	console.log(gesamtMinuten);
	console.log(seconds);
	startTimer(seconds, display, percent, gesamtMinuten,indexTimer);
	//create Element id, timestamp object
	if (indexTimer == (anzahl-1)) {
		var mybutton = document.getElementById("buttom"); 
		mybutton.value = "Speichere und beende die Stunde."; 
		mybutton.onclick = saveReview;
		// change button to start saveReview();
	}	
	//else 
	//
};


function saveReview() {
	//alles zusammensetzen an objekten
	//speichern
	//zum Anfang screen gehen
	nameStunde = names;
	timestamp = Date.now();
	review.[timestart].push({"nameStunde":nameStunde, "timestamp":timestamp});
	console.log("Gespeichert");
	localStorage.setItem("review", JSON.stringify(review));
	window.location.assign("erste_folie.html");
	};




function colorchange(percent){
	var backGroundRadius = 0;
	var backGroundChange;	
	backGroundRadius = 240- (percent * 2.4);
	backGroundChange = "hsl"+"(" + backGroundRadius +",100% , 50%)"
	document.body.style.background = backGroundChange;
};

