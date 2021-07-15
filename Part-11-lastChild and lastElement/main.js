//Ex-1
var r1 = document.getElementById("myID1");
console.log(r1.lastChild);
document.write(r1.lastChild.textContent);

//laststElementChild does not access to text, space and comment
console.log(r1.lastElementChild); //It will show 'null'
document.write(r1.lastElementChild);

//Ex-2
var r2 = document.getElementById("bd");
console.log(r2.lastChild);
document.write(r2.lastChild.textContent);

//lastElementChild does not access to text, space and comment
console.log(r2.lastElementChild); 
document.write(r2.lastElementChild.textContent);
