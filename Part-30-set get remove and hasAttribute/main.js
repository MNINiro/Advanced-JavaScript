var paraElm = document.getElementById("p1");

//Ex-1-set Attribute (to change)
paraElm.setAttribute('class','pClass'); //setting class name
//alternate way
// paraElm.className = "paraClass"
console.log(paraElm);

//Ex-2-Get Attribute (to return)
var getAt = paraElm.getAttribute('id');
console.log(getAt);

paraElm.getAttribute('title');
console.log(paraElm.title);

//Ex-3-Adding attributes those are not assigned initially
var h2Elm = document.getElementById("mh2");

h2Elm.setAttribute('title','myH2');
h2Elm.setAttribute('class','head2');

//Ex-4-on style attribute
//better not to change style. it will change entire style
// h2Elm.setAttribute('style','font-style: italic');

//use this way
h2Elm.style.fontStyle = 'italic';
console.log(h2Elm);

//Ex-5-get Attribute of h2 element
console.log(h2Elm.getAttribute('id'));
console.log(h2Elm.getAttribute('title'));
console.log(h2Elm.getAttribute('class'));

//Ex-6-getting attribute using loop
ln = h2Elm.attributes.length
for (i=0; i<ln; i++){
    console.log(h2Elm.attributes[i])
}

//Ex-7-remove attribute
var h1Elm = document.getElementById("mh1");
h1Elm.removeAttribute('class'); //class has been removed
console.log(h1Elm);

//Ex-8-checking if the attribute is available or not
console.log(h1Elm.hasAttribute('class'));
console.log(h1Elm.hasAttribute('id'));


