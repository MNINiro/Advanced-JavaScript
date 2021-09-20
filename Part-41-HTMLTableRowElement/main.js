//Properties
var tab = document.getElementById("myTab");
var rw = tab.rows; //all of the rows in the table
console.log("No of cells in the row:",rw[0].cells.length);

console.log("Element of a specific cell:",rw[0].cells[0]);  //cell structure with data
console.log("content of a specific cell:",rw[0].cells[0].innerHTML); //only data

console.log("Element of a specific cell:",rw[1].cells.item(2)); //cell structure with data
console.log("content of a specific cell:",rw[1].cells.item(2).innerHTML); //only data

console.log("Element by id:",rw[2].cells.namedItem("mytd")); //row structure with data
console.log("content by id:",rw[2].cells.namedItem("mytd").innerHTML); //only data

//Replacing cell content
// var x = rw[2].cells.namedItem("mytd").innerHTML = "Ban"; 
// document.write(x);


//Methods - insertCell
var myCell1 = rw[0].insertCell(3); //a new cell (td) has been added in the row
myCell1.innerHTML = "Fees";

var myCell2 = rw[1].insertCell(3); //a new cell (td) has been added in the row
myCell2.innerHTML = "1000";

//deleteCell
// rw[0].deleteCell(0); //content of the first row deleted



