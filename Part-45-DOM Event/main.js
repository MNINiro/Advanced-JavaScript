//addEventListener will execute multiple functions

//Ex-1-Structure (obj.addEventListener(click,function,true/false))
var btn = document.getElementById("mybtn");
btn.addEventListener("click",function(){alert("Button clicked");false});

// Alternate way
function show(){
    alert("Show function");
}
btn.addEventListener("click",show); //false not required since it's by default

// Ex-3
function disp(){
    alert("Display function");
}
btn.addEventListener("click",disp,true);


//RemoveEventListener
// btn.removeEventListener("click",disp,true);
