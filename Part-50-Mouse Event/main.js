//Ex-1
function div1(e){
    console.log(e.type);
}

function div2(e){
    console.log(e.type);
}

var divOne = document.getElementById("one");
var divTwo = document.getElementById("two");

// divTwo.addEventListener("mousedown",div1,false);
// divTwo.addEventListener("mouseup",div1,false);
// divTwo.addEventListener("click",div1,false);
// divTwo.addEventListener("dblclick",div1,false);
// divTwo.addEventListener("mouseenter",div1,false);
// divTwo.addEventListener("mouseleave",div1,false);
// divTwo.addEventListener("mouseover",div1,false);
// divTwo.addEventListener("mouseout",div1,false);
// divTwo.addEventListener("mousemove",div1,false);
// divTwo.addEventListener("contextmenu",div1,false);

//both of them will fire from child to parent
// divTwo.addEventListener("click",div2,false);
// divOne.addEventListener("click",div1,false);
// divTwo.addEventListener("mouseup",div2,false);
// divOne.addEventListener("mouseup",div1,false);
// divTwo.addEventListener("mousedown",div2,false);
// divOne.addEventListener("mousedown",div1,false);
// divTwo.addEventListener("contextmenu",div2,false);
// divOne.addEventListener("contextmenu",div1,false);

//Ex-2
var txt = document.getElementById("myTxt");

function changeColorOrange(e){
    txt.style.backgroundColor = 'orange';
}

function changeColorWhite(e){
    txt.style.backgroundColor = 'white';
}

txt.addEventListener("mouseover",changeColorOrange,false);
txt.addEventListener("mouseout",changeColorWhite,false);


