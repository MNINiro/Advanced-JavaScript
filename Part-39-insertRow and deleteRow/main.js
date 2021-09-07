var tab = document.getElementById("myTab");
var NewRow = tab.insertRow(2); //-1 is the last row and 0 is the first

// //Ex-1-Will be added at the end of the table
// NewRow.innerHTML = "<tr> <td>102</td> <td>Daud</td> <td>CSE</td> </tr>";

//Ex-2-Creating cell and inserting data. 
//To insert in a specific row, change insertRow index like (1)
NewRow.insertCell(0).textContent = 555;
NewRow.insertCell(1).textContent = "Hafiz";
NewRow.insertCell(2).textContent = "Sales";


//Ex-3-Deleting row
tab.deleteRow(2);