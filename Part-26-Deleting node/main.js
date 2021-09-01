var parentNode = document.getElementById("myUL");
var refNode = document.getElementById("it2");

//Ex-1
parentNode.removeChild(refNode);
console.log(parentNode);

//Ex-2
var refNode1 = document.getElementById("it4");
var delNode = parentNode.removeChild(refNode1);
console.log(delNode);


//Ex-3-to remove first or last child
var delNode = parentNode.removeChild(parentNode.lastElementChild);
console.log(delNode);

//Ex-4-to remove specific child based on index (0 is enter key)
var delNode = parentNode.removeChild(parentNode.childNodes[1]);
console.log(delNode);
console.log(delNode.textContent);

// var removeNode = document.getElementById("myDiv");
// removeNode.
// console.log(document.body);
