
// Ex-1-Array destructuring
var arr = ['Javascript','six months','MNI'];
var[courseName,Duration,Tutor] = arr;   //Array destructuring (index declaration not required)
console.log(courseName);
console.log(Duration);
console.log(Tutor);
/*
// Ex-2
var[courseName,,Tutor] = arr;   //, refers missing item. It must be used to maintain index serialization
console.log(courseName);
console.log(Tutor);

// Ex-3
var a,b;
[a,b] = [10,20];
console.log(a);
console.log(b);

// Ex-4
var a,b;
[a,b=30] = [25];    //here b has default value. Only a will receive value from array
console.log(a);
console.log(b);

// Ex-5
var a,b;
[a=40,b=50] = [11];    //here 'a' will receive from array
console.log(a);
console.log(b);

// Ex-6
var a,b;
[a=40,b=50] = [22,33];    //here both of the value will be replaced by array's value
console.log(a);
console.log(b);
*/

// =============================================================================

/*
// Array passing to a function
// Ex-1
var arr = [10,20,30];
function show([v1,v2,v3]){  //arr passed to function parameter
    console.log(v1);
    console.log(v2);
    console.log(v3);
}
show(arr);

// Ex-2-for mission value
var arr = [11,22,33];
function show([v1,,v3]){  //, for missing value
    console.log(v1);
    console.log(v3);
}
show(arr);

// Ex-3-rest parameter
var arr = [101,202,303,404,505,606];
function show([v1, v2, ...rest]){  //arr passed to function parameter
    console.log(v1);
    console.log(v2);
    console.log(rest);
}
show(arr);
*/

// =============================================================================
/*
// Array returning from a function
var arr = [10,20,30];
function show(z){
    return z;
}
var x = show(arr);
var[v1,v2,v3] = x;  //array destructuring
console.log(v1);
console.log(v2);
console.log(v3);
*/
// =============================================================================

/*
// Nested Array destructuring
var narr = ['Javascript','six months','MNI',['Ahmed','Mamoon']];
var[courseName,Duration,Tutor,[std1,std2]] = narr;

console.log(courseName);
console.log(Duration);
console.log(Tutor);
console.log(std1);      //narr[3][0]
console.log(std2);
*/

