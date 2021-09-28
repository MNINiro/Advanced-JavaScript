var myWindow

function openWin() {
    myWindow = window.open('', '', 'width=200, height=100');    // Opens a new window
    myWindow.document.write("<p>This is 'myWindow'</p>");       // Some text in the new window
}
  
function moveWin() {
    myWindow.moveBy(250, 250);  // Moves the new window
    myWindow.focus();           // Sets focus to the new window
}

function moveToWin() {
    myWindow.moveTo(250, 250);  // Moves to a certain position
    myWindow.focus();           // Sets focus to the new window
}

function closeWin() {
    myWindow.close();
    
}

document.getElementById("opbtn").addEventListener("click",openWin);
document.getElementById("movbtn").addEventListener("click",moveWin);
document.getElementById("mov2btn").addEventListener("click",moveToWin);
document.getElementById("clsbtn").addEventListener("click",closeWin);


