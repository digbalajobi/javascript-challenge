//from data.js
//var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
//data.forEach((tableData) => {
    //var row = tbody.append("tr");
    //Object.entries(tableData).forEach(([key, value]) => {
      //var cell = row.append("td");
      //cell.text(value);
    //})
//});

//tbody = d3.select("tbody")

function printdata(tableData){ 
  tbody.html("")
  tableData.forEach((datarow)=>{
    var row = tbody.append("tr");
    Object.entries(datarow).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  });
}
printdata(data)


// Select button on form for date filtering
var button = d3.select("#filter-btn");
// Select form used for entering date to filter
//var form = d3.select("#form");
// Create event handlers for clicking the button to filter by date
// or by pressing enter
button.on("click", runEnter);
//form.on("submit", clickSelect);
// Create funcion to run for both clicking the button and pressing enter
function runEnter() {
  // Prevent the page from refreshing
  //d3.event.preventDefault();
  // Define variable for input date and select id that stores the date
  var input = d3.select("#datetime").property("value");
  // Define variable for value property of input date
  console.log(input);
  var filterData = data.filter(row => row.datetime===input);
  console.log(filterData);
  printdata(filterData)
};

//button.on("change", clickSelect)
