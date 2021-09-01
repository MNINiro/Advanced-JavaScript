var r1 = document.getElementById("h1ID");
console.log(r1.firstChild)//Enter key
console.log(r1.firstChild.textContent)//Enter key
console.log(r1.firstChild.nextSibling); //will show "comment"
console.log(r1.firstChild.nextSibling.nextSibling); //Text

console.log(r1.firstChild.nextSibling.nextSibling.nextSibling); //Will show span
console.log(r1.firstChild.nextSibling.nextSibling.nextElementSibling); //Will show span
console.log(r1.firstChild.nextElementSibling); //It Will also show span

console.log(r1.firstElementChild.nextSibling);//Will show Text (enter)
console.log(r1.firstElementChild.nextSibling.textContent); //Will show Text (enter)

console.log(r1.firstElementChild.nextSibling.nextSibling);//Will show Take Care
console.log(r1.firstElementChild.nextElementSibling); //Will also show Take Care

console.log(r1.firstElementChild.nextElementSibling.textContent); //Will also show only Take Care
