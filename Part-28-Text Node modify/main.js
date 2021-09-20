//comment all examples except the one you are testing
// Ex-1-Length Property
var textNode = document.getElementById("p1");
var ln = textNode.firstChild.length; //must maintain tree structure
//Alternate way
// var ln = textNode.childNodes[0].length
console.log(ln);

//Ex-2-Data property
var parentNode = document.getElementById("mh1");
// console.log(parentNode.firstChild.data);

// //assigning new data
// parentNode.firstChild.data = "It's a replaced h1 element";
// console.log(parentNode.firstChild);

// //Ex-3-Append Data String
// parentNode.firstChild.appendData(" where new text has been appended");
// console.log(parentNode.firstChild);
// console.log(parentNode.childNodes); //Node list

//Ex-4-Delete data
var parentNode1 = document.getElementById("mh2");
// parentNode1.firstChild.deleteData(0,7);
// console.log(parentNode1.firstChild);

// //Ex-5-insertData(start, string)
// parentNode1.firstChild.insertData(0,"It's");
// console.log(parentNode1.firstChild);

// // Ex-6-replaceData(start,length,string)
// parentNode1.firstChild.replaceData(0,4,"This is");

// //Ex-7-splitText(start)
// parentNode1.firstChild.splitText(12);
// console.log(parentNode1.firstChild);
// console.log(parentNode1); //becomes two texts

//Ex-8-substringData(start, length)
var result = parentNode1.firstChild.substringData(8,7);
console.log(result);
