//targetElement.insertAdjacentText("position",element)
var parentNode = document.getElementById("myDiv") //to view result

// // Ex-1-beforebegin
var targetElement = document.getElementById("myh2");
var myText = "Hello Students";
targetElement.insertAdjacentText('beforebegin',myText);
// console.log(parentNode);

// Ex-2-afterbegin
var myText = ("Let's learn Javascripts");
targetElement.insertAdjacentText('afterbegin',myText);
// console.log(parentNode);

// Ex-3-beforeend
var myText = ("then we will learn framework");
targetElement.insertAdjacentText('beforeend',myText);
// console.log(parentNode);

// // Ex-2-afterbegin
var myText = ("Happy coding!");
targetElement.insertAdjacentText('afterend',myText);
console.log(parentNode);
console.log(parentNode.childNodes);
