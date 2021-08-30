//Ex-1-It will search a class only inside the body
var r1 = document.body.getElementsByClassName('geek');
document.write(r1,'<br>');
console.log(r1);

//Ex-1-It will search a class only inside the body
var r2 = document.body.getElementsByClassName('geek find');
console.log(r2);

//Ex-3-Class within show id
var getShow = document.getElementById("show");
var r3 = getShow.getElementsByClassName("geek")
console.log(r3);

//Ex-4-Alternate way
var r4 = document.getElementById("show").getElementsByClassName("geek")
console.log(r4);

//EX-5-Length
var ln = document.getElementsByClassName("geek").length;
console.log("length: ",ln);

//Ex-5-With loop
for (let i=0; i<ln; i++){
    var cls = document.getElementsByClassName("geek");
    document.write(cls[i],'<br>');
    console.log(cls[i]);
}