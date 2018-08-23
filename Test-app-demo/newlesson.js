
var number;
var container;


function readElements(){
	let unterrichtsStunde = localStorage.getItem("stunde");
	newstunde = JSON.parse(unterrichtsStunde);
	console.log(newstunde.lesson2.elemente[0].namen);
};

function addElement(){
	//hier bei jedem touch auf das "+" ein Element mehr
	//frage nach Name und Zeit
};


function saveElements() {
	//hier die eingegebenen Strings und numbers in json umwandeln
	//außerdem in localStorage
	//und zurückführen zu neue Stunde anlegen
	//savelocal();
	console.log("OK");
}

function saveLocal(){
	readElements();
	let unterrichtsStunde = localStorage.setItem("stunde");
	stunde.stringify = JSON.parse(stunde);
console.log(stunde);
};

function addFields(){
            // Number of inputs to create
            number = document.getElementById("anzahl").value;
            // Container <div> where dynamic content will be placed
            container = document.getElementById("container");
            // Clear previous contents of the container
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (i=0;i<number;i++){
                // Append a node with a random text
                container.appendChild(document.createTextNode("Element " + (i+1)));
                // Create an <input> element, set its type and name attributes
                var input = document.createElement("input");
                input.type = "text";
                input.name = "anzahl" + i;
                container.appendChild(input);
                // Append a line break 
                container.appendChild(document.createElement("br"));
            }
            //container.appendChild('<a href="#" id="savedetails" onclick="saveFields()">OK</a>')
            console.log(number);
        }
//for (i=1; i<3; i++){ var key =i+"name" ; data ={key:"name1"}}