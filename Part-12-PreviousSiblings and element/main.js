var r1 = document.getElementById("h1ID");
console.log(r1.lastChild); //Enter key
console.log(r1.lastChild.previousSibling); //will show "comment"
console.log(r1.lastChild.previousSibling.previousSibling); //Enter key

console.log(r1.lastChild.previousSibling.previousSibling.previousElementSibling); //Will show Take Care
console.log(r1.lastChild.previousElementSibling); //Will show Take Care

console.log(r1.lastChild.previousElementSibling.previousElementSibling); //Will show learn Javascript
console.log(r1.lastElementChild.previousElementSibling); //Will show Learn Javascript
