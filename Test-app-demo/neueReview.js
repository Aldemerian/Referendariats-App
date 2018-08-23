var enumLesson=0;
var enumTime=0;
	
function createLessonArray(nId) {
	var inputLesson = document.getElementByName(nId).value;	
	enumLesson++;
	console.log(enumLesson);
}
	
function createTimeArray(tId) {	
	enumTime++;
	console.log(enumTime);
}
		

//in eine einfache Tabelle umwandeln!!!


function addtable(l) {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "stundenlayout");
    document.body.appendChild(x);
    
    var header = x.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Namen des Elements</b>";
    cell = row.insertCell(1);
    cell.innerHTML = "<b>Dauer</b>";
    cell = row.insertCell(2);
    cell.innerHTML = "";    

    x = document.createElement("THEAD");
    x.setAttribute("id", "name");
    document.body.appendChild(x); 
    
	for (var k=0; k < l; k++) {
   	var y = document.createElement("TR");
    	y.setAttribute("id", "myTr"+k);
    	document.getElementById("stundenlayout").appendChild(y);
    	
   	var z = document.createElement("TD");
    	var t = document.createElement("INPUT");
    	t.setAttribute("type", "text");
    	t.setAttribute("name", "eleNamen"+k);
    	z.appendChild(t);
    	document.getElementById("myTr"+k).appendChild(z);
    	
    	var z = document.createElement("TD");
    	var t = document.createElement("INPUT");
    	t.setAttribute("type", "number");
    	t.setAttribute("name", "zeit"+k);
    	z.appendChild(t);
    	document.getElementById("myTr"+k).appendChild(z);
    
    	var z = document.createElement("TD");
    	var t = document.createElement("INPUT");
    	t.setAttribute("type", "button");
    	t.setAttribute("onclick", "loeschen("+k+")"); 
    	t.setAttribute("value","löschen" ); 
    	z.appendChild(t);  
    	  
    	document.getElementById("myTr"+k).appendChild(z);
    }
}
addtable(l);