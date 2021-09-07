var paraElm = document.getElementById("myp");
cs = paraElm.style;
// console.log(cs);
// console.log(cs.cssText);

//Ex-1
cs.cssText = "font-size:70px; color:green"; //will replace existing style by it
console.log(cs.cssText);

// // Ex-2-Number of properties
// console.log("Length: ",cs.length);


// //Item Method
// console.log("Items: ",cs.item(0));
// console.log("Items: ",cs[1]); //Alternate way

// //getPropertyValue Method
// var propValue = cs.getPropertyValue('color');
// console.log("Property value:",propValue);


// //removeProperty Method
// var removeProp = cs.removeProperty('color');
// console.log("Removed Property:",removeProp);
// console.log(cs.cssText);

//setProperty Method
var setProp = cs.setProperty('font-size','90px', 'important');
console.log(cs.cssText);

//getPropertyPriority Method
var paraElm2 = document.getElementById("myp2");
cs2 = paraElm2.style;
var propPriority = cs2.getPropertyPriority('color'); //color's priority "important"
console.log(propPriority);



