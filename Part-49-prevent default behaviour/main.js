function stopLink(e){
    e.preventDefault(); //it will prevent default action
    e.stopPropagation(); //it will stop propagation of any parent element
}

function div1(e){
    this.style.backgroundColor = 'red';
}


var lnk = document.getElementById("myLink");
var dv = document.getElementById("myDiv");

lnk.addEventListener("click",stopLink,false);
dv.addEventListener("click",div1,false);

