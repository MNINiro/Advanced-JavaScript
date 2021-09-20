//Ex-1-Bubbling phase
// It will execute codes from bottom to top serially
/*
document.getElementById("one").addEventListener("click",function(){
    console.log("1");},false);
document.getElementById("two").addEventListener("click",function(){
    console.log("2");},false);
document.getElementById("three").addEventListener("click",function(){
    console.log("3");},false);
document.getElementById("four").addEventListener("click",function(){
    console.log("4");},false);
*/

//Ex-2-Capture phase
//It will execute codes from top to bottom serially
document.getElementById("one").addEventListener("click",function(){
    console.log("1");},true);
document.getElementById("two").addEventListener("click",function(){
    console.log("2");},true);
document.getElementById("three").addEventListener("click",function(){
    console.log("3");},true);
document.getElementById("four").addEventListener("click",function(){
    console.log("4");},true);


//Ex-3-Target phase
