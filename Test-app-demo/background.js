
var lessonNumber = localStorage.getItem("lessonNumber");
lessonNumber = JSON.parse(lessonNumber);
var lessonName = "lesson"+lessonNumber;
console.log(lessonNumber);

//hole die variable gewählteStunde aus dem localStorage und setze sie an aktuelle Stunde ein, oder so
	var indexTimer = 0;
	var mins = newstunde[lessonNumber].zeit[indexTimer];
	console.log(mins);
	var seconds = mins * 60;
	var gesamtMinuten = newstunde[lessonNumber].zeit[indexTimer];
	var names = newstunde[lessonNumber].eleNamen[indexTimer];
	var during= [];
	var dateObject ={	};
	
function allTheTime() {
	var time = new Date;
	var namen = newstunde[lessonNumber].namen
	var year = time.getFullYear();
	var month = time.getMonth();
	var day = time.getDate();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var time = time.getTime();
	dateObject = {
	namen, lessonName, time, year, month, day, hour, minute	
	};
	//JSON.stringify(dateObject);
};

	during.push(Date.now());
	allTheTime();	
	var percent;
	var dieserTimer;
	var anzahl = newstunde[lessonNumber].zeit.length;
	//document.getElementById("demo1").innerHTML = text;

window.onload = function () {
	loadLessonPlan();
	display = document.querySelector('#time');
   startTimer(seconds, display, percent, gesamtMinuten);
	
};

function loadLessonPlan() {
	let unterrichtsStunde = localStorage.getItem("stunde");
	newstunde = JSON.parse(unterrichtsStunde);
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
	//hier
	during.push(Date.now());
	console.log("Index "+indexTimer);
	indexTimer = indexTimer + 1;
	console.log("Index " +indexTimer);
	clearInterval(dieserTimer);
	mins = newstunde[lessonNumber].zeit[indexTimer];
	gesamtMinuten = newstunde[lessonNumber].zeit[indexTimer];;
	names = newstunde[lessonNumber].eleNamen[indexTimer];;
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
	during.push(Date.now());
	
	if (localStorage.getItem("stundenReview") === null) {
		during = [during];
  		localStorage.setItem("stundenReview", JSON.stringify(during));
	}
  	else {
  		var stundenReview = localStorage.getItem("stundenReview");
		stundenReview = JSON.parse(stundenReview);
		stundenReview.push(during);
  		localStorage.setItem("stundenReview", JSON.stringify(stundenReview));
  	}
	if (localStorage.getItem("stundenZeiten") === null) {
		dateObject =[dateObject];
  		localStorage.setItem("stundenZeiten", JSON.stringify(dateObject));
  	}
  	else {
  		var stundenZeiten = localStorage.getItem("stundenZeiten");
		stundenZeiten = JSON.parse(stundenZeiten);
		stundenZeiten.push(dateObject);
		localStorage.setItem("stundenZeiten", JSON.stringify(stundenZeiten));
  	}
	window.location.assign("erste_folie.html");	
}; 



function colorchange(percent){
	var backGroundRadius = 0;
	var backGroundChange;	
	backGroundRadius = 240- (percent * 2.4);
	backGroundChange = "hsl"+"(" + backGroundRadius +",100% , 50%)"
	document.body.style.background = backGroundChange;
};

