//targetElement.insertAdjacentHTML("position",element)
var parentNode = document.getElementById("myDiv") //to view result

// // Ex-1-beforebegin
var targetElement = document.getElementById("myh2");
var myHTML = "<span> Hello Students </span>";
targetElement.insertAdjacentHTML('beforebegin',myHTML);
// console.log(parentNode);

// Ex-2-afterbegin
var newHTML = ("<p> Let's insert a paragraph </p>");
targetElement.insertAdjacentHTML('afterbegin',newHTML);
// console.log(parentNode);

// Ex-3-beforeend
var newHTML = ("<em> It's invincible </em>");
targetElement.insertAdjacentHTML('beforeend',newHTML);
// console.log(parentNode);

// // Ex-2-afterbegin
var newHTML = ("<p> It's another paragraph </p>");
targetElement.insertAdjacentHTML('afterend',newHTML);
console.log(parentNode);
