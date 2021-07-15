document.write("========== Document ==========",'<br>')

document.write('nodeName: ',document.nodeName,'<br>');
document.write('nodeValue: ',document.nodeValue,'<br>');
document.write('nodeType: ',document.nodeType,'<br>','<br>');

console.log(document.nodeName);
console.log(document.nodeValue);
console.log(document.nodeType);

document.write("========== Element ==========",'<br>')

var elm = document.getElementById("myID");
document.write('nodeName: ',elm.nodeName,'<br>');
document.write('nodeValue: ',elm.nodeValue,'<br>');
document.write('nodeType: ',elm.nodeType,'<br>','<br>');

console.log(elm.nodeName);
console.log(elm.nodeValue);
console.log(elm.nodeType);

document.write("========== Text ==========",'<br>')

var txt = document.getElementById("myID");
document.write('nodeName: ',txt.firstChild.nodeName,'<br>');
document.write('nodeValue: ',txt.firstChild.nodeValue,'<br>');
document.write('nodeType: ',txt.firstChild.nodeType,'<br>','<br>');

console.log(txt.firstChild.nodeName);
console.log(txt.firstChild.nodeValue);
console.log(txt.firstChild.nodeType);

//to access to the comment
document.write("========== Comment ==========",'<br>')
document.write('nodeName: ',txt.firstChild.nextSibling.nodeName,'<br>');
document.write('nodeValue: ',txt.firstChild.nextSibling.nodeValue,'<br>');
document.write('nodeType: ',txt.firstChild.nextSibling.nodeType,'<br>','<br>');

// console.log(txt.firstChild.nextSibling.nodeName);
console.log(txt.firstChild.nextSibling.nodeValue);
console.log(txt.firstChild.nextSibling.nodeType);

//Changing text
document.write("========== Changing Text  ==========",'<br>')
var txt1 = document.getElementById("myID1").firstChild.nodeValue
document.write('Original: ',txt1,'<br>');

var txt1 = document.getElementById("myID1").firstChild.nodeValue = "It's a line"
document.write('Changed: ',txt1);

