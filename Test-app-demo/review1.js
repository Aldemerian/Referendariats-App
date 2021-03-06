var unterrichtsStunde = localStorage.getItem("stunde");
newstunde = JSON.parse(unterrichtsStunde);

var stundenZeiten	= localStorage.getItem("stundenZeiten");
	stundenZeiten = JSON.parse(stundenZeiten);


//for each single incident
//	schreibe soll
//	berechne und schreibe ist
//	create table


function json2table(json, classes) {
  var cols = Object.keys(json[0]);
  
  var headerRow = '';
  var bodyRows = '';
  
  classes = classes || '';

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  cols.map(function(col) {
    headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
  });

  json.map(function(row) {
    bodyRows += '<tr>';

    cols.map(function(colName) {
      bodyRows += '<td>' + row[colName] + '</td>';
    })

    bodyRows += '</tr>';
  });

  return '<table class="' +
         classes +
         '"><thead><tr>' +
         headerRow +
         '</tr></thead><tbody>' +
         bodyRows +
         '</tbody></table>';
}

/* How to use it */

var defaultData = newstunde;
//[ { country: 'China',         population: 1379510000 },
//  { country: 'India',         population: 1330780000 },
//  { country: 'United States', population:  324788000 },
//  { country: 'Indonesia',     population:  260581000 },
//  { country: 'Brazil',        population:  206855000 },
//];

document.getElementById('tableGoesHere').innerHTML = json2table(defaultData, 'table');

/* Live example */

var dom = {
  data: document.getElementById('data'),
  table: document.getElementById('tableGoesHere'),
};

dom.data.value = JSON.stringify(defaultData);
dom.data.addEventListener('input', function() {
  dom.table.innerHTML = json2table(JSON.parse(dom.data.value), 'table');
});


function zurueck() {
    window.location.assign("erste_folie.html")
}