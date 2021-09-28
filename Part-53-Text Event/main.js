var txtNm = document.getElementById("myTxt");

function showNm(e){
    console.log(e.type,' ',e.data);
}

//Ex-1
txtNm.addEventListener("textInput",showNm,false);
