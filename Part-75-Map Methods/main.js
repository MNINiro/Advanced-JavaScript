// Map method creates a new array based on the original array.
// It does not change the original array

// Ex-1
var arr = [10,20,30,40,50];
var newArr = arr.map(function(value){
    value++
    console.log(value);
    return value;
})
console.log('arr:',arr);
console.log('mapped:',newArr);

/*
// Ex-2
var ProArr = [
    {price: "100", product: "Mobile"},
    {price: "200", product: "Mic"},
    {price: "300", product: "Laptop"},
    {price: "400", product: "PC"},
];

var newProArr = ProArr.map(function(value){
    // console.log(value);
    // console.log(value.price);
    // console.log(value.product);
    
    return value.price;      //Only one return is allowed in a function
    // return value.product;

});
console.log(newProArr);

// Alternate way (single line function)
var newProArr = ProArr.map(value => value.product);
console.log(newProArr);

// Alternate way (for multiple items)
var newProArr = ProArr.map((value, i) => {value.price});
console.log(newProArr);
*/