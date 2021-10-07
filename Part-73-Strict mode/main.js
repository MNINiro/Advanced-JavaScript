
// Ex-1
"use strict";   //enabled strict mode and it will aplly on all of the following codes
var a = 10;     //var must be written in strict mode
console.log(a);

//strict mode can be enabled only for a function by writing "use strict"
function test(){
    // "use strict"
    var b = 20;     //will show error without var
    console.log(b);
}
test();


/*
// Ex-2.1-without strict mode, following code will not show error but o/p will be wrong
function test1(a,b,b){
    return(a+b+b);
}

console.log(test1(10,20,50));
*/
/*
// Ex-2.2-corrected by using strict mode (comment previous codes)
"use strict";
function test2(a,b,b){      //duplicate parameter is not allowed. replace b by c
    return(a+b+b);
}

console.log(test2(10,20,50));
*/