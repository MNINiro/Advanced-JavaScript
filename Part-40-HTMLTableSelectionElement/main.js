var tabBody = document.getElementById("myTbody");
var rw= tabBody.rows;
console.log(rw);    //HTML collection
console.log(rw[0]); //Specific row
console.log(rw[0].innerHTML); //data of the Specific row

//comment above console.logs
//replacing specific rows data
rw[0].innerHTML = "1010"
console.log(rw[0].innerHTML); //data of the Specific row

//replacing entire row data
rw[0].innerHTML = "<tr> <td>222</td> <td>Alam</td> <td>Automobile</td> </tr>"
console.log(rw[0]);

//to insert a new row
var newRow = tabBody.insertRow(-1);
newRow.insertCell().textContent = "555"
newRow.insertCell().textContent = "Ahyaan"
newRow.insertCell().textContent = "Gaming"

//to delete a specific row from myTbody
tabBody.deleteRow(1)

