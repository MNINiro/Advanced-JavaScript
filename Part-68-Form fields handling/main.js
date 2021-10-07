//Ex-1- Accessing to field by id
var uName = document.getElementById("uID");

//Accessing attributes
console.log(uName);         //accessing to username field
console.log(uName.name);    //accessing to username's name attribute
console.log(uName.type);    //data type of name attribute
console.log(uName.id);      //id of name attribute

//Accessing elements by index number
var usName = document.frm1.elements[0]; //0 for first field, 1 for second etc.
console.log(usName);         //accessing to form element
console.log(usName.id);      //accessing to form element's value
console.log(usName.name);    //accessing to form element's value
console.log(usName.type);    //accessing to form element's value

//Accessing elements by name attribute
var usrName = document.frm1.elements['userNameField']; 
console.log(usrName);         //accessing to form element
console.log(usrName.id);      //accessing to form element's value
console.log(usrName.name);    //accessing to form element's value
console.log(usrName.type);    //accessing to form element's value

//Accessing elements by name or id attribute without element
// var usrName = document.frm1.userNameField; 
var usrName = document.frm1.uID; 
console.log(usrName);         //accessing to form element
console.log(usrName.id);      //accessing to form element's value
console.log(usrName.name);    //accessing to form element's value
console.log(usrName.type);    //accessing to form element's value

var usrNameVal = document.frm1.uID
console.log(usrNameVal.value);         //accessing to form element

usrNameVal.value = 'MNI';               //changing value
console.log(usrNameVal.value);         



