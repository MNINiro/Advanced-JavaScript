var newWin;

function openWin(){
    newWin = window.open("","_blank","width=300, height=200");
}

function focusWin(){
    newWin.focus();
}

function blurWin(){
    newWin.blur();
}

document.getElementById("opbtn").addEventListener("click",openWin);
document.getElementById("focbtn").addEventListener("click",focusWin);
document.getElementById("blrbtn").addEventListener("click",blurWin);

