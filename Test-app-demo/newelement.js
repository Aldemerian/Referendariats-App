   
//var x = localStorage.getItem("elementNumber");   
//var elementNumber = JSON.parse(x);

var l = 1;
//elementNumber; 
 
var namen;
var eleNamen;
var zeit;

function loeschen(k) {
	document.getElementById("stundenlayout").deleteRow(k);
}

function add() {
	 var table = document.getElementById("stundenlayout");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<input type="text" name="eleNamen'+l+'">';
    cell2.innerHTML = '<input type="number" name= "zeit'+l+'">';
    cell3.innerHTML = '<input type="button" onclick= "loeschen('+l+')" value ="löschen" >';
	document.getElementById("stundenlayout").insertRow();
	l++;
}

var eleNamen= [];
var zeit=[];

function submit() {
	//create and save
	console.log(l);
	let unterrichtsStunde = localStorage.getItem("stunde");
	newstunde = JSON.parse(unterrichtsStunde);
	//hier weiter
	var nameArray = [];
	var timeArray = [];
	for (var k = 0; k<l; k++) {
		nameArray.push(document.getElementsByName("eleNamen"+k)[0].value);
		console.log(nameArray);
		timeArray.push(document.getElementsByName("zeit"+k)[0].value);
		console.log(timeArray);
		}	
	namen = document.getElementsByName("Namen")[0].value;
	console.log(namen);
	var coolstunde = {"namen": namen,
			"eleNamen":	nameArray,
			"zeit": timeArray
		}
	newstunde.push(coolstunde);
	localStorage.setItem("stunde", JSON.stringify(newstunde));
}

function zurueck() {
    window.location.assign("erste_folie.html")
   }