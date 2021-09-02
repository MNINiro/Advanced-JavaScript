var paraElm = document.getElementById("p1");

//Ex-1-object type and attributes (DOM property)
console.log(Object.prototype.toString.call(paraElm));

//Ex-2-HTML attributes
console.log(paraElm.id);
console.log(paraElm.title);
console.log(paraElm.className);

//Ex-3-changing any attribute of an element
paraElm.title = "myPara";
paraElm.className = "pClass";
console.log(paraElm);

//Ex-4-
/*The attributes property returns a live collection of 
all attribute nodes registered to the specifid node.
It's read only
*/
var h1Elm = document.getElementById("mh1");

ln = h1Elm.attributes.length;
for (i=0; i<ln; i++){
    console.log(h1Elm.attributes[i])    
}

//to show specific attribute
console.log(h1Elm.attributes["title"]);

//will return all attribute collection
console.log(h1Elm.attributes); 



