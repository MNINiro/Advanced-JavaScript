var paraElm = document.getElementById("myp");
var allCSSProp = window.getComputedStyle(paraElm);
// console.log(allCSSProp);
console.log(allCSSProp.fontStyle);
console.log(allCSSProp.fontSize);
// console.log(allCSSProp.fontSize = '90px'); //Not allowed since it is read-only

//to change or assign any value:
//.style can't access to internal or external codes but allow changes
var cs = paraElm.style;
console.log(cs.fontSize); //No result since it's internal
//BUT we can assign new value for internal codes
cs.fontSize = '100px';
cs.fontStyle = 'normal';

//for inline code
console.log(cs.color); //will show result since it's inline
cs.color = 'blue'; //color changed