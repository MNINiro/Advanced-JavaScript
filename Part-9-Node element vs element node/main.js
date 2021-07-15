br = '<br>'
//parentNode and parentElement
//Ex-1
var r1 = document.getElementById("ht");
console.log(r1.parentNode);     //It will show document
console.log(r1.parentElement);  //it will show null since there is no element html

//Ex-2
var r2 = document.getElementById("bd");
console.log(r2.parentNode);     //it will show body's parent html
console.log(r2.parentElement);  //it will show body's parent element html

