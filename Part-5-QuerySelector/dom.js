//Ex-1-tag selector-it will show only the 1st tag
var br = '<br>'
var x1 = document.querySelector("p");
console.log(x1);
document.write(x1,br);

//Ex-2-it will show only the 1st tag
var x2 = document.querySelector("h1");
console.log(x2);
document.write(x2,br);

//Ex-3-ID selector
var x4 = document.querySelector("#show, #display"); //it will show only the 1st argument
console.log(x4);
document.write(x4,br);

//Ex-4-Class selector
var x5 = document.querySelector(".geek"); //It's a class
console.log(x5);
document.write(x5,br);

//Ex-5
var x6 = document.querySelector(".geek, .find"); //it will show only the 1st argument
console.log(x6);
document.write(x6,br);

//Ex-6-it will show all of the tags
var x3 = document.querySelectorAll("p");
console.log(x3);
document.write(x3,br);

//Ex-7-Element Selector
var x7 = document.querySelectorAll("h1, .geek, #show"); //it will show all of them
console.log(x7);
document.write(x7,br);

//Ex-8-
var x7 = document.querySelectorAll(".geek, .find"); //it will show all of them
console.log(x7);
document.write(x7,br);

//Ex-9-Attribute Selector
var x8 = document.querySelectorAll("div"); //it will show all of the div attributes
console.log(x8);
document.write(x8,br);

//Ex-10-Specific Attribute Selector
var x10 = document.querySelectorAll("div[id]"); //it will show only div those have ID
console.log(x10);
document.write(x10,br);

// Ex-11-More specific Attribute Selector
var r1 = document.getElementById("display"); //It will access to the specific ID
var r2 = document.querySelectorAll("span.spn"); //then it will access to the span and its class
console.log(r1);
console.log(r2);
document.write(r2,br);

//Alternate way
var r3 = document.getElementById("display").querySelectorAll("span.spn");
console.log(r3);

//Same as previous
var r4 = r1.querySelectorAll("span.spn");
console.log(r4);

//Accessing to child attributes
var r5 = document.querySelectorAll("#show > .find > span.gfs"); //Accessing Id then class then to the span and its class
console.log(r5);
document.write(r5)

//Length method
var ln = document.querySelectorAll(".geek").length; 
console.log("No of geek: ",ln);
document.write(ln);

//Alternate method
var data = document.querySelectorAll(".geek"); 
var ln = data.length;
console.log(ln);
console.log(data);


//with loop
for (let i=0; i<ln; i++){
    var cls = data;
    document.write(cls[i],'<br>');
    console.log(cls[i]);
}
