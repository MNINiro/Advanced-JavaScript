var parentNode = document.getElementById("myUL");
console.log(parentNode.innerText); //will show only Text content
console.log(parentNode.innerHTML); //will show only HTML content
console.log(parentNode.childNodes); //will show all child nodes

//initialized by new string
// parentNode.innerText = "This is an innerText example";
// console.log(parentNode);

////initialized by new element
parentNode.innerHTML = "<span> It's a span </span>";
console.log(parentNode);
console.log(parentNode.childNodes);
