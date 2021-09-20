//targetElement.insertAdjacentElement("position",element)
var parentNode = document.getElementById("myDiv") //to view result

// // Ex-1-beforebegin
var targetElement = document.getElementById("myh2");
var newElement = document.createElement("span");
newElement.textContent = "It's a span"
targetElement.insertAdjacentElement('beforebegin',newElement);
// console.log(parentNode);

// Ex-2-afterbegin
var newElement = document.createElement("p");
newElement.textContent = "It's a paragraph"
targetElement.insertAdjacentElement('afterbegin',newElement);
// console.log(parentNode);

// Ex-3-beforeend
var newElement = document.createElement("div");
newElement.textContent="It's a div";
targetElement.insertAdjacentElement('beforeend',newElement);
// console.log(parentNode);

// Ex-2-afterbegin
var newElement = document.createElement("h4");
newElement.textContent="This is heading 4";
targetElement.insertAdjacentElement('afterend',newElement);
console.log(parentNode);
