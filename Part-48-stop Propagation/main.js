function div1(e){
    this.style.backgroundColor = 'red';
}

function div2(e){
    this.style.backgroundColor = 'blue';
    //will stop propagation other objects
    //but will propagate all of the handlers (function)
    //of the same id
    // e.stopPropagation(); 
    
    //Now only one object will be propagated
    //will not change the size
    e.stopImmediatePropagation(); 
}

function div2_2(e){
    this.style.width = '250px';
}

function div3(e){
    this.style.backgroundColor = 'green';
    // e.stopPropagation();
}

var divOne = document.getElementById("one");
var divTwo = document.getElementById("two");
var divThree = document.getElementById("three");

divOne.addEventListener("click",div1,false);
divTwo.addEventListener("click",div2,false);
divTwo.addEventListener("click",div2_2,false);
divThree.addEventListener("click",div3,false);

