var paraElm = document.getElementById("myp");

//will display all classes as a DOMTocken list
var elementClass = paraElm.classList;
console.log(elementClass);

for (i=0; i<2; i++){
    console.log(elementClass[i]);
}
//DOM tocken properties
console.log('Length: ',elementClass.length);
console.log('Value: ',elementClass.value);

//DOM tocken methods

//Item
console.log(elementClass.item(1));

//Add-can be added one or more classes
// elementClass.add("myClass4","myClass5");
// console.log(paraElm);

//Remove-can be removed one or more classes
// elementClass.remove("myclass3");
// console.log(paraElm);

// Replace-first element by the 2nd element
// elementClass.replace("myclass2", "myclass1");
// console.log(paraElm);

//Contain
// var tf = elementClass.contains("myClass5");
// console.log(tf);

//toggle-adding and removing
// elementClass.toggle("myClass1");
// console.log(paraElm);



