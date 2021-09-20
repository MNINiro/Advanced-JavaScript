//Ex-1
var result = document.getElementsByTagName("head");
document.write(result,'<br>');
console.log(result)

//Ex-2
var result1 = document.getElementsByTagName("body");
console.log(result1)

//Ex-3
var result3 = document.getElementsByTagName("p");
console.log(result3)

//Ex-4
var result4 = document.getElementsByTagName("h1");
console.log(result4)

//Ex-5
var result5 = document.getElementsByTagName("div");
console.log(result5)

//Ex-6
var result6 = document.getElementsByTagName("*"); //All tags
console.log(result6)

// Ex-7
var result7 = document.body.getElementsByTagName("*"); //All tags within the body tag
console.log(result7)

//Ex-8
var getSpan = document.getElementById("geek1"); //It will return all of the ID named "geek1"
var r1 = getSpan.getElementsByTagName("span") // It will return only span tag of geek id
console.log(getSpan);
console.log(r1);

//Alternate way of getting same output
var r3 = document.getElementById("geek1").getElementsByTagName("span");
console.log(r3);

//Ex-9-Tag Length property
var len1 = document.getElementsByTagName("p").length
document.write("Number of P tags: ",len1,'<br>');
console.log(len1);

//Ex-10-Tag Length property (alternate method)
var len2 = document.getElementsByTagName("div")
document.write("Number of div tags: ",len2.length,'<br>','<br>');
console.log(len2.length);

//Ex-11-Tag Length property using loop
for (let i=0; i<len1; i++){
    var res = document.getElementsByTagName("p")[i];
    document.write(res,'<br>')
    console.log(res,'<br>');
}
