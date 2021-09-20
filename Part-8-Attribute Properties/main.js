br = '<br>'
//deprecated methods (No longer used)
//Ex-1-Attribute properties- name, value
var r1 = document.getElementById("myID");

document.write(r1.attributes[0].nodeName,' = '); // showing first attributes name
document.write(r1.attributes[0].nodeValue,br); // showing first attributes value

//in one line
document.write(r1.attributes[1].nodeName,' = ',r1.attributes[1].nodeValue,br); // showing second attributes name and value

ln = r1.attributes.length;
document.write('Number of attributes :',ln,br,br); // showing all attributes size

//Alternate way using loop
for(let i=0; i<ln; i++){
    document.write(r1.attributes[i].nodeName,'=');
    document.write(r1.attributes[i].nodeValue,br);
}

//Ex-2-New way to access to name and value for Attribute properties
console.log(r1.attributes[0].name); //nodeName is not required
console.log(r1.attributes[0].value);

document.write(r1.attributes[0].name,' = '); // showing first attributes name
document.write(r1.attributes[0].value,br); // showing first attributes value

ln = r1.attributes.length;
document.write('Number of attributes :',ln,br,br); // showing first attributes name

//Alternate way using loop
for(let i=0; i<ln; i++){
    document.write(r1.attributes[i].name,'=');
    document.write(r1.attributes[i].value,br);
}
