var s;

//load and copy lesson
//var allLesson = Object.setPrototypeOf(lesson1.elemente);

//let enumerableKeys = [];  
//for (let key in allLesson) {  
//  enumerableKeys.push(key);
//}

function createElement() {
	cond = true;
	Name[] = None;
	Zeit[] = None;
	while(cond) {
		print("Name: \n");
		Name[].attach(raw_input());
		print("Zeit: \n");
		Zeit[].attach(raw_input());
		print("Weitere Einträge? [Y/n]")
		if(raw_input() != "Y") {
			cond = False;
		}
	}
	for(i = 0; i < Name.length(); i++) {
		Name[i];
		Zeit[i];
	}
}