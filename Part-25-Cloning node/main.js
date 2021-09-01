var parentNode = document.getElementById("myUL");

//Ex-1
//duplicate node still not a part of the document
//It will only copy the original content and show
var duplicateNode = parentNode.cloneNode(false); //only element copied
console.log(duplicateNode);

var duplicateNode = parentNode.cloneNode(true); //element and items are copied
console.log(duplicateNode);

//to check if duplicateNode is a part of the document or not
console.log(document.body) //it is not a part of the document

//Ex-2
//to make duplicateNode as a part of the document, it must be appended in any element
//here, appending in div element
// var newParentNode = document.getElementById("myDiv");
// newParentNode.append(duplicateNode); 
// newParentNode.appendChild(duplicateNode); //same as append
// console.log(newParentNode);

//to check if duplicateNode is a part of the document or not
// console.log(document.body) //Now it is a part of the document

