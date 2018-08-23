var stunde;

stunde = [
		 {	"namen":"6a",
			"eleNamen":	["Anfang der Stunde",
				"Mitte der Stunde",
				"Gruppenarbeit",
				"Gruppenarbeit2",
				"Ende der Stunde"
				],
			"zeit": ["1", "5", "3", "4", "10"]
		},
		{	"namen":"5a",
			"eleNamen":	[
				"foobar",
				"Ende der Stunde"],
			"zeit": ["1", "2"]
		},
		{	"namen":"7a",
			"eleNamen":	[ 
					"Anfang der Stunde",
					"Ende der Stunde"],
			"zeit": ["1", "2"]
		},
		{	"namen":"8a",		
			"eleNamen":[ 
					"Anfang der Stunde",
					"Ende der Stunde"],
			"zeit": ["1", "2"]
		},
		{	"namen":"9a",
			"eleNamen":[
				 "Anfang der Stunde",
				 "Ende der Stunde"],
					"zeit": ["1", "2"]
		},
		{	"namen":"10a",
			"eleNamen": ["Anfang der Stunde",
			"Ende der Stunde"],
			"zeit": ["3", "4"]
			}
];

stunde = {
	"lesson6": {		
			"lessonNamen":"10a",
			//"anzahl": "2",
			//"laenge" : "45",
			"eleNamen": ["Anfang der Stunde",
			"Ende der Stunde"]
			"zeit": ["3", "4"]
			//ich denke er wird da immer noch timestamp bzw zeit davorsetzen
			}
}
lesson6 =[
					timestampStart,
					nexttimestamp,
					usw
]



anzahlElemente = stunde.lesson6.eleNamen.length;
//nimm die anzahlElemente+1 das ist eine gehaltene Stunde
//
anzahlAller = lesson6.length;
//gib dem user die auswahl seiner gehaltenen Stunden
anzahlGehaltenerStunden = anzahlAller/anzahlElemente;


//let lessons = [
//	{
//		"stundenID" : "1",
//		"stundenName" : "foo"
//	},
//		{
//		"stundenID" : "2",
//		"stundenName" : "bar"
//	}
//]




