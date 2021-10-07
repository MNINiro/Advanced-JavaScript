// Ex-1
// window.onload = function(){
//     document.getElementById("myDiv").textContent = 'Hello Window'
// }

// Ex-2-Better way
function show(){
    document.getElementById("myDiv").textContent = 'Hello Window'
}
window.addEventListener("load",show);