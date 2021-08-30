br = '<br>'
// parentNode and parentElement
// Ex-1
var r1 = document.getElementById("ht");
console.log(r1.parentNode);     //It will show document
console.log(r1.parentElement);  //it will show null since there is no element of html

//Ex-2
var r2 = document.getElementById("bd");
console.log(r2.parentNode);     //it will show body's parent html
console.log(r2.parentElement);  //it will show body's parent element html

//children node returns only elements not text, space or comments
//Ex-3
var r3 = document.getElementById("bd");
console.log(r3.childNodes);

//Ex-4
ln = r3.childNodes.length
//Alternate way using loop
for(let i=0; i<ln; i++){
    document.write(r3.childNodes[i].textContent);  
    console.log(r3.childNodes[i]);
}

document.write(br,br)

//Ex-5
var r4 = document.getElementById("bd");
console.log(r4.children);

len = r4.children.length
for(let i=0; i<len; i++){
    document.write(r4.children[i].textContent,br);  
    console.log(r4.children[i]);  
}

//Ex-6-Replacing textContent
var r5 = document.getElementById("bd");
document.write(r5.children[1].textContent,'=');  
r5.children[1].textContent = 'Hello'
document.write(r5.children[1].textContent);  
