var myWindow

function scrollWin() {
    window.scrollBy(0,-120); //going upwards by pixels
    
}

function scrollSmooth() {
    window.scrollBy({ top: -120, behavior:"smooth"}); //going upwards smoothly
    
}

function scrollToWin() {
    // window.scrollTo(0, 0); //going upwards smoothly    
    window.scrollTo({ top: 0, behavior:"smooth"}); //going to top smoothly    
}


document.getElementById("scrollTop").addEventListener("click",scrollWin);
document.getElementById("smoothScroll").addEventListener("click",scrollSmooth);
document.getElementById("scroolTo").addEventListener("click",scrollToWin);


