//parentNode.replaceChild(newChild, oldChild)
var parentNode = document.getElementById("myUL");
var refNode = document.getElementById("it2");

//Ex-1
//replacing with new node
//creating a new element
var newChild = document.createElement("li");
newChild.textContent = "Do Breakfast";

//Replacing refNode by newChild
parentNode.replaceChild(newChild,refNode);
console.log(parentNode);

//Ex-2-span will move to it2's position
/* var spn = document.getElementById("mySpan");
parentNode.replaceChild(spn,refNode);
console.log(parentNode); */

//comment Ex-2 to see result
// var replacedNode = parentNode.replaceChild(spn,refNode);
// console.log(replacedNode);
