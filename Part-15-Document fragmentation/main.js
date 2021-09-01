//Ex-1-Creating empty document fragment
var newDF = document.createDocumentFragment();
console.log(newDF);

// //Accessing to an element to show
// var nID = document.getElementById("divID");
// console.log(nID);

// //Appending Element Node
var newSec = document.getElementById("secID") //Initial condition. nothing in the section tag
// console.log(newSec);

// var nH1 = document.getElementById("hID1"); //Accessing to the child element of div
// console.log(nH1);

//Ex-2-Previous codes must be commented for better understanding
//Now appending div child H1 as a child of the section tag
//Div tag will be empty since it has moved to the section tag
// newSec.appendChild(nH1);
// console.log(newSec);
// console.log(nID);


//Ex-3- Creating new element node then appending into existing element
var h2Node = document.createElement("h2"); //Just created
var targetNode = document.getElementById("divID"); // will be appended in div

//Appending new child element h2 in div
targetNode.appendChild(h2Node); //Appended h2
console.log(targetNode);

//Ex-4-creating and appending at a time
targetNode.appendChild(document.createElement("h3"));

//Ex-5-Creating text node and appending
targetNode.appendChild(document.createTextNode("I am a new text"));

//Ex-6-Creating Comment node and appending
targetNode.appendChild(document.createComment("I am a new comment"));

// Ex-7-Creating and Appending Element Node Text Node and Comment Node Together
var h4Node = document.createElement("h4");
var newText = document.createTextNode("I have been inserted");
var newComment = document.createComment("Example of appending all types of elements");

//appending text node into new element
h4Node.appendChild(newText)
console.log(h4Node);

//appending comment node into new element
h4Node.appendChild(newComment);

//appending new element into div node
targetNode.appendChild(h4Node);
console.log(targetNode);

//Appending div node into section
newSec.append(targetNode);
console.log(newSec);
