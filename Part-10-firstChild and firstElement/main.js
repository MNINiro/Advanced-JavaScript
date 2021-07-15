//Ex-1
var r1 = document.getElementById("myID1");
console.log(r1.firstChild);
// document.write(r1.firstChild.textContent);

//firstElementChild does not access to text, space and comment
console.log(r1.firstElementChild); //It will show 'null'
// document.write(r1.firstElementChild.textContent);

//Ex-2
var r2 = document.getElementById("bd");
console.log(r2.firstChild);
document.write(r2.firstChild.textContent);

//firstElementChild does not access to text, space and comment
console.log(r2.firstElementChild); 
document.write(r2.firstElementChild.textContent);
