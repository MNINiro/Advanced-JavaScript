// Ex-1-setTimeout method
// function runText(){
//     document.getElementById("myDiv").textContent += 'Hello '
// }
// setInterval(runText,2000);

//Ex-2-Alternate way
var intervalID = setInterval(() => {
    document.getElementById("myDiv").textContent += 'Hello '
}, 2000);
    

// Ex-1-clearTimeout method
//to cancel setTimeout method
function clrTime(){
    clearInterval(intervalID) //from arrow function
}

document.getElementById("btn").addEventListener("click",clrTime)
