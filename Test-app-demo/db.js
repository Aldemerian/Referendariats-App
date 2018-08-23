

 function create_array() {
	//remove existing items 
	//save new items
 }
 function load_array() {
	//load from db
 }
 
 function openDB() {
 	let dbLesson = window.indexedDB;
 	let dbElement = window.indexedDB;
 	
 	let request1 = dbLesson.open(
 	"databaseLesson"
 	);
 	request1.onupgradeneeded = (event) => {
 		let databLesson = event.target.result;
 		let lessonStore = datablesson.createObjectStore(
 		"lesson", {keyPath:"stundenID"}, {keyPath:"stundenName"}
 		);
	};
 	request1.onerror = (event) => {
 	  let error = event.target.error;
 	  console.error(error.message);
 	};
 	request1.onsuccess = function (event) {
 	  let databLesson = event.target.result;
 	  let transaction = databLesson.transaction(
 	  [Lessons],
 	  "readwrite"
 	  );
 	  let lessonStore = transaction.objectStore("Lessons");
 	  lessons.foreach(function (lesson) {
 	  objectStore.add(lesson);
 	  });
 	  console.log(databLesson.name);
 	  console.log(databLesson.version);
 	  console.log(databLesson.lesson.stundenID);
 	};
 	
 	
	let request2 = dbElement.open(
	"databaseElement"
	); 
	request2.onupgradeneeded = (event) => {
 	  let databElement = event.target.result;
 	  let elementStore = databElement.createObjectStore(
 	  "elemente", 
 	  {keyPath: "lesson"},
 	  {keyPath: "elementName"},
 	  {keyPath: "ID"}
 	);
	};
	request2.onerror = (event) => {
 	  let error = event.target.error;
 	  console.error(error.message);
 	};
 	request2.onsuccess = function (event) {
 	  let databElement = event.target.result;
 	  console.log(databElement.name);
 	  console.log(databElement.version);
 	};
 };
 
 let idbFactory = window.indexedDB;
let request = idbFactory.open('databaseLesson', 2);
let lessons = [
	{
		'stundenID' : '1',
		'stundenName' : 'foo'
	},
		{
		'stundenID' : '2',
		'stundenName' : 'bar'
	}
]

request.onerror = (event) => {
 	  let error = event.target.error;
 	  console.error(error.message);
 	};
request.onsuccess = function (event) {
 	  let database = event.target.result;
 	  let transaction = database.transaction(['Lessons'], "readwrite");
 	  let objectStore = transaction.objectStore('Lessons');
 	  lessons.forEach(function(lesson) {
 	  objectStore.add(lesson);
 	  });
}
request.onupgradeneeded = (event) => {
 		let database = event.target.result;
 		let objectStore = database.createObjectStore(
 		'Lessons', {keyPath:'stundenID'}, {keyPath:'stundenName'}
 		);
};