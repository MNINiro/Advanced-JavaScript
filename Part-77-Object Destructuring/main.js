
// Ex-1-Object creation & destructuring
var obj = {
    courseName:'Javascript',
    Duration:'six months',
    Tutor:'MNI'
};

//conventional method
// console.log(obj.courseName);
// console.log(obj.Duration);
// console.log(obj.Tutor);
/*
//destructuring
var{courseName,Duration,Tutor} = obj;   //Object destructuring (only key is required)

console.log(courseName);
console.log(Duration);
console.log(Tutor);

// Ex-2-creating & using allies
var{courseName:cn, Duration:dr, Tutor:tr} = obj;   //Object destructuring (only key is required)

console.log(cn);
console.log(dr);
console.log(tr);

// Ex-3- Any number of key & value can be used unlike Array distructuring 
// no ',' is required for missing item
var{courseName,Tutor} = obj;   

console.log(courseName);
console.log(Tutor);

// Ex-4
var a,b;
({a,b} = {a:10,b:20});
console.log(a);
console.log(b);

// Ex-5-Alternate way: in a single line
var {a,b} = {a:10,b:20};
console.log(a);
console.log(b);

// Ex-6 - default value
var {a,b=25} = {a:15};
console.log(a);
console.log(b);

// Ex-7 - value overwriting 
var {a=10,b=25} = {a:50,b:60};
console.log(a);
console.log(b);

// Ex-8 - value overwriting with allies
var {a:y=10, b:z=25} = {a:55,b:66};
console.log(y);
console.log(z);
*/

// Ex-9-Object passing to a function
// function show({courseName,Duration,Tutor}){     //destructuring
//     console.log(courseName);    
//     console.log(Duration);
//     console.log(Tutor);   
// }
// show(obj);

/*
// Ex-10- Object returning from a function
var student = {Id: 'A101', Name: 'Ayman', Age: 20};
function show(z){
    return z;
}

var x = show(student);
var {Id,Name,Age} = x;  //object destructuring
console.log(Id);
console.log(Name);
console.log(Age);
*/

/*
// Nested object destructuring
var narr = {
    Language:'Javascript',
    Duration:'six months',
    Teacher:'MNI',
    Student:{
        Std1:'Ahmed', 
        Std2:'Mamoon'
        }
    };

    var{Language,Duration,Teacher,Student:{Std1,Std2}} = narr;

console.log(Language);
console.log(Duration);
console.log(Teacher);
console.log(Std1);      //narr[3][0]
console.log(Std2);
*/