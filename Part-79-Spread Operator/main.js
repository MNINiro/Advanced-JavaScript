/*
// Ex-1-Array literals: Copying references (conventional)
var arr = [10,20,30];
var n = arr;    //reference copied
arr[0] = 50;    //It changes both arr and v array
console.log('arr:',arr);
console.log('n:',n);

//Ex-2-Spread operator to manipulate individual element
var x = [...arr];   //value copied
arr[0] = 25;        //only arr[0] will be changed. NOT X[0]
console.log('arr[0]:',arr[0]);
console.log('x[0]:',x[0]);  //no changes

x[0]=75;            //Assigning new value in x[0].
console.log('x[0]:',x[0]);

console.log('arr:',arr);
console.log('x:',x);

//Ex-3-Expanding array values
var y = [...arr,55,66,77]
console.log('y:',y);

var z = [1,2,3,...arr,55,66,77]
console.log('z:',z);

var combined = [...y,...z]
console.log('combined:',combined);
*/

//Ex-4-Object literals spreading
var obj = {coureName:'JavaScript',tutor:'MNI'};
console.log('obj:',obj);

var newObj = obj;
obj.coureName = "PHP";
console.log('obj:',obj);
console.log('newObj:',newObj);

var spObj = {...obj,duration:'6 months'};
obj.coureName = 'Python'
console.log('obj:',obj);
console.log('spObj:',spObj);

var comb = {...obj,...spObj}
console.log('Combined:',comb);

//Ex-5-Function Arguments
function multiply(a, b) {
    return a * b;
}
const numbers = [3, 5];
console.log(multiply(...numbers));