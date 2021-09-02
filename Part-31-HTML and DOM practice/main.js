function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < 2; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode("cell in row "+i+", column "+j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }

  function set_background() {
    // get a list of all the body elements (there will only be one),
    // and then select the zeroth (or first) such element
    myBody = document.getElementsByTagName("body")[0];
  
    // now, get all the p elements that are descendants of the body
    myBodyElements = myBody.getElementsByTagName("p");
  
    // get the second item of the list of p elements
    myP = myBodyElements[1];
    myP.style.background = "rgb(255,0,0)";
  }

  function start() {
    // get the reference for the body
    var mybody = document.getElementsByTagName("body")[0];

    // creates <table> and <tbody> elements
    mytable = document.createElement("table");
    mytablebody = document.createElement("tbody");

    // creating all cells
    for(var j = 0; j < 3; j++) {
        // creates a <tr> element
        mycurrent_row = document.createElement("tr");

        for(var i = 0; i < 4; i++) {
            // creates a <td> element
            mycurrent_cell = document.createElement("td");
            // creates a Text Node
            currenttext = document.createTextNode("cell is row " + j + ", column " + i);
            // appends the Text Node we created into the cell <td>
            mycurrent_cell.appendChild(currenttext);
            // appends the cell <td> into the row <tr>
            mycurrent_row.appendChild(mycurrent_cell);
        }
        // appends the row <tr> into <tbody>
        mytablebody.appendChild(mycurrent_row);
    }

    // appends <tbody> into <table>
    mytable.appendChild(mytablebody);
    // appends <table> into <body>
    mybody.appendChild(mytable);
    // sets the border attribute of mytable to 2;
    mytable.setAttribute("border","2");
}

