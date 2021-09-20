//Ex-1-Event binding with HTML attribute
function show(){
    alert("Hello Event");
}

//Ex-2-Event binding with JS
var btn = document.getElementById("mybtn");
btn.onclick = function(){       //anonymous function
    alert("Button clicked");
} 

/*
// Ex-3-Alternate way (Overwriting previous function)
document.getElementById("mybtn").onclick = function(){       //anonymous function
    alert("Button has been clicked");
} 

// Ex-4-Another way (Overwriting all of the previous function)
function disp(){
    alert("Me clicked");
}
document.getElementById("mybtn").onclick = disp;
*/
