// Ex-1
function show(a){
    console.log("It's show function");
}

function display(){     //It's a callback function
    console.log("It's display function");
}
display(show());


/*
// Ex-2
function show(a){
    console.log("It's show function",a);    
}

function display(callback){     //It's a callback function
    console.log("It's display function");
    var a = 100;
    callback(a);
}
display(show);
*/

/*
// Ex-3
function show(a){
    console.log("It's show function",a);    
}

function display(a,callback){     //It's a callback function
    console.log("It's display function");
    var a = 100;
    callback(a);
}
display(101,show);
*/

/*
// Ex-4
function display(callback){     //It's a callback function
    console.log("It's display function");
    var a = 100;
    callback(a);
}
display(function(a){        //Anonymous function
    console.log("It's show function",a);    
});
*/

/*
// Ex-5
function display(callback){     //It's a callback function
    console.log("It's display function");
    var a = 100;
    callback(a);
}
display(a=>{        //Arrow function
    console.log("It's show function",a);    
});
*/

/*
// Ex-6-Much efficient arrow function
function display(callback){     //It's a callback function
    console.log("It's display function");
    var a = 100;
    callback(a);
}
display(a=> console.log("It's show function",a));    
*/

/*
//Ex-7-Synchronous callback function
// All functions will execute serially then console.log('End') will execute
function show(){
    console.log("It's show function");    
}

function display(callback){     //It's a callback function
    console.log("It's display function");
    callback();
}
display(show);
console.log('End');
*/

/*
//Ex-8-Asynchronous callback function
//console.log('End') will execute first then show function will execute after pedefined miliseconds
setTimeout(function show(){
    console.log("It's show function");    
},5000);
console.log('End');
*/
