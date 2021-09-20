
//Ex-1
document.getElementById("myP").addEventListener("click",function(e){
    console.log(e);
});

//Ex-2
document.getElementById("myP").addEventListener("click",function(e){
    console.log(e.clientX);
});

//Ex-3
document.getElementById("myP").addEventListener("click",function(e){
    console.log(e.clientY);
});

//Ex-4
document.getElementById("myP").addEventListener("click",function(e){
    console.log(e.type);
});

//Ex-5
document.getElementById("myP").addEventListener("click",function(e){
    // console.log(e.target);
    console.log(e.currentTarget);
});


//Ex-1-Bubbling phase (use divs with following example)
// It will execute codes from bottom to top serially
document.getElementById("one").addEventListener("click",function(e){
    console.log("1");
    console.log('Target = ' + e.target.dataset.name);
    console.log('Current Target = ' + e.currentTarget.dataset.name);
},false);
document.getElementById("two").addEventListener("click",function(e){
    console.log("2");
    console.log('Target = ' + e.target.dataset.name);
    console.log('Current Target = ' + e.currentTarget.dataset.name);
},false);
document.getElementById("three").addEventListener("click",function(e){
    console.log("3");
    console.log('Target = ' + e.target.dataset.name);
    console.log('Current Target = ' + e.currentTarget.dataset.name);
},false);
document.getElementById("four").addEventListener("click",function(e){
    console.log("4");
    console.log('Target = ' + e.target.dataset.name);
    console.log('Current Target = ' + e.currentTarget.dataset.name);
},false);
    



