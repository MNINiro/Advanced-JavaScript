//textContent vs innerHTML
var para1 = document.getElementById("myP1");
console.log(para1);
console.log(para1.textContent); //all child elements got together

//Ex-1-Assigning new data
//all child nodes are eleminated and converted into one
// para1.textContent = "It's a textContent example"; 
// console.log(para1);

//Ex-2-in textContent, even all elements notations will be considered as a part of single text
para1.textContent = "<em> It's a textContent example </em>"; 
console.log(para1);


//innerHTML
//Ex-3-in innerHTML, elements notations will be applied on the text
var para2 = document.getElementById("myP2");
para2.innerHTML = "<em> It's a textContent example </em>";
console.log(para2);