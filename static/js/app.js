// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
});

tbody = d3.select("tbody")

function displayData(data){ 
  tbody.text("")
  data.forEach(function(sighting){
  new_tr = tbody.append("tr")
  Object.entries(sighting).forEach(function([key, value]){
      new_td = new_tr.append("td").text(value)	
  })
})}

displayData(tableData)

// Select button on form for date filtering
var button = d3.select("#filter-btn");
// Select form used for entering date to filter
var form = d3.select("#form");
// Create event handlers for clicking the button to filter by date
// or by pressing enter
button.on("click", clickSelect);
form.on("submit", clickSelect);
// Create funcion to run for both clicking the button and pressing enter
function clickSelect() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Define variable for input date and select id that stores the date
  //var inputDate = d3.select("#datetime");
  // Define variable for value property of input date
  console.log(button.property("value"));
  var new_table = tableData.filter(sighting => sighting.datetime===button.property("inputValue"))
  displayData(new_table);
}

button.on("change", clickSelect)
