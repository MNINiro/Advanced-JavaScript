// the normalize() method removes empty Text Nodes and
// joins adjacent Text nodes

//tergetting element where a new node will be appended
var targetNode = document.getElementById("dID");

//craeting and appending new text
targetNode.appendChild(document.createTextNode("Hello "));

//craeting and appending new text
targetNode.appendChild(document.createTextNode("dear "));

//craeting and appending new text
targetNode.appendChild(document.createTextNode("students "));

//since all of the above TextNodes are appending in the targetNode,
//it is creating 3 text nodes. to make it one, we have to normalize the targetNode()
console.log(targetNode.childNodes);

//above 3 text nodes become 1 after normalize with enter key
// (check w/o commenting previous line)
targetNode.normalize();
console.log(targetNode.childNodes);
