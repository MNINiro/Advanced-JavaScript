var myWindow

function openWin() {
    myWindow = window.open('', '', 'width=200, height=100');    // Opens a new window
    myWindow.document.write("<p>This is 'myWindow'</p>");       // Some text in the new window
}
  
function resizeWin() {
    myWindow.resizeBy(400,300);  // Moves the new window
    myWindow.focus();           // Sets focus to the new window
}

function closeWin() {
    myWindow.close();
    
}

document.getElementById("opbtn").addEventListener("click",openWin);
document.getElementById("rezbtn").addEventListener("click",resizeWin);
document.getElementById("clsbtn").addEventListener("click",closeWin);


