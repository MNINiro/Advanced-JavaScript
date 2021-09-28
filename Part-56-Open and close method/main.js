//Open window
// //Ex-1-creating window using button
// function createWindow(){
//     window.open();
// }
// //New window will open only on button click
// document.getElementById("btn").addEventListener("click",createWindow,false);

// Ex-2
// var newWindow = window.open("https://www.incis.info"); //default in a new window
// var newWindow = window.open("https://www.incis.info", "_blank"); //in a new window
// var newWindow = window.open("https://www.incis.info", "_self"); //in the same window
// var newWindow = window.open("https://www.twitter.com", "_blank","height=300,width=400"); //Specify windows size

// var newWindow = window.open("", "_blank","height=400, width=300"); //blank page
// newWindowrite("This a new window");

//Browser dependent
// Ex-3
// var newWindow = window.open("https://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");    

// Ex-4
// var newWindow = window.open("", "_blank","height=400, width=300"); //blank page
// newWindow.document.write("This a new page");

// // Close window 
// function exit(){
//     newWindow.document.close(); //No more writing on the page
//     newWindow.close();
// }
// document.getElementById("clsbtn").addEventListener("click",exit);

// Ex-5
function openWin() {
    myWindow = window.open("pic.html", "myWindow", "width=1000, height=1000");   // Opens a new window
}
document.getElementById("opbtn").addEventListener("click",openWin);
 
function resizeWin() {
    myWindow.resizeTo(250, 250);                             // Resizes the new window
    myWindow.focus();                                        // Sets focus to the new window
}
document.getElementById("rszbtn").addEventListener("click",resizeWin);

function closeWin() {
    myWindow.close();   // Closes the new window
}
// document.getElementById("clsbtn").addEventListener("click",closeWin);
document.getElementById("clsbtn").addEventListener("click",closeWin);