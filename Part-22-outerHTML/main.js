/* innerHTML replaces only the content of the element
but outerHTML replaces both content and the element itself
*/

var parentNode = document.getElementById("myDiv");
var refNode = document.getElementById("myUL");
// console.log(parentNode);
// console.log(refNode);

// refNode.innerHTML = ""; //all contents are gone! not element(ul)
// console.log(parentNode);

// refNode.outerHTML = ""; //all contents and element (ul) also gone!
// console.log(parentNode);
// console.log(refNode.outerHTML); //just to view ul content

refNode.outerHTML = "<p> It's a paragraph which is replasing existing ul element</p>";
console.log(parentNode);



