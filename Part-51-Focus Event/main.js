var txtNm = document.getElementById("myTxt");
var txtCl = document.getElementById("myCls");
var txtDp = document.getElementById("myDept");

function feInNm(e){
    txtNm.style.backgroundColor = 'orange';    
}
function feInCl(e){
    txtCl.style.backgroundColor = 'orange';
}
function feInDp(e){
    txtDp.style.backgroundColor = 'orange';
}

function feOutNm(e){
    txtNm.style.backgroundColor = 'white';
}
function feOutCl(e){
    txtCl.style.backgroundColor = 'white';
}
function feOutDp(e){
    txtDp.style.backgroundColor = 'white';
}

//Ex-1
// txtNm.addEventListener("focus",feInNm,true);
// txtCl.addEventListener("focus",feInCl,true);
// txtDp.addEventListener("focus",feInDp,true);

// txtNm.addEventListener("blur",feOutNm,true);
// txtCl.addEventListener("blur",feOutCl,true);
// txtDp.addEventListener("blur",feOutDp,true);

//Ex-2
txtNm.addEventListener("focusin",feInNm,false);
txtCl.addEventListener("focusin",feInCl,false);
txtDp.addEventListener("focusin",feInDp,false);

txtNm.addEventListener("focusout",feOutNm,false);
txtCl.addEventListener("focusout",feOutCl,false);
txtDp.addEventListener("focusout",feOutDp,false);