var txtNm = document.getElementById("myTxt");

function keyNm(e){
    console.log(e.type,' ',e.keyCode,' ',String.fromCharCode(e.keyCode));
}

//Ex-1
txtNm.addEventListener("keydown",keyNm,false);
txtNm.addEventListener("keypress",keyNm,false); //actual value
txtNm.addEventListener("keyup",keyNm,false);