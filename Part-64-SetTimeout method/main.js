// Ex-1-setTimeout method
// function changeCSS(){
//     document.getElementById("myP").style='color:red';
// }

// setTimeout(changeCSS,2000); //2000 in milisecond

// Ex-2-Alternate way
// setTimeout(function changeCSS(){
//     document.getElementById("myP").style='color:red';
// },2000)

// Ex-3-Anoynimous function can be used
// setTimeout(function(){
//     document.getElementById("myP").style='color:red';
// },2000)

// Ex-4-Arrow function can also be used
var timeoutID = setTimeout(() => {       //var timeoutID used for clearTimeut method
    document.getElementById("myP").style='color:blue';
},5000)


// Ex-1-clearTimeout method
//to cancel setTimeout method
function clrTime(){
    clearTimeout(timeoutID) //from Arrow function
}

document.getElementById("btn").addEventListener("click",clrTime)
