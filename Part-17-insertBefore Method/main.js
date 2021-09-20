/* The inserBefore() method is used to insert node before the 
reference node as a child of a specified node.

If the given child is a reference to an existing node in the
document, insertBefore() moves it from its current position
to the new position.

If referenceNode is null, the newNode is inserted at the end
of the list of child node
*/

// Ex-1-Inserting a new node
// Structure: parentNode.insertBefore(newNode, referenceNode)
var parentNode = document.getElementById("myUl");

//creating new li element
var newNode = document.createElement("li");

//Adding new text
newNode.textContent = "Backbone JS"

//Accessing to the reference node
var referenceNode = document.getElementById("myang");

//inserting new element
parentNode.insertBefore(newNode,referenceNode);
// console.log(parentNode);

// Ex-2-Moving a node
var moveNode = document.getElementById("myd3");
parentNode.insertBefore(moveNode, referenceNode);
// console.log(parentNode);

// Ex-3-inserting text node
var textNode = document.createTextNode("Let's Learn JS");
// parentNode.insertBefore(textNode, referenceNode);
// console.log(parentNode);

//Ex-4-inserting from different list
var newMoveNode = document.getElementById("myPy");
parentNode.insertBefore(newMoveNode, referenceNode);
console.log(parentNode);
