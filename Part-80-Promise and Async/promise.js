/*  ===================================================================
                                Promise
    ==================================================================*/
/*
// Ex-1-Basic
const promiseObj1 = new Promise((resolve, reject)=>{
    let req = true
    if (req==true){
        resolve("Request successful") //any array or object can be used instead of string
    } else{
        reject("Request Rejected")
    }
})      //here .then can be used directly without promiseObbj1

promiseObj1.then(
    (value) => { console.log(value) },
    (error) => { console.log(error) },
);
*/

/*
// Ex-2-Promise catch
const promiseObj1 = new Promise((resolve, reject)=>{
    let req = false
    if (req==true){
        resolve("Request successful") //any array or object can be used instead of string
    } else{
        reject("Request Rejected")
    }
}).then(
    (value) => { console.log(value) },
    ).catch((error) => { console.log(error) })

*/

// Ex-3-Promise chaining, catch and finally
const promiseObbj = new Promise((resolve, reject) => {
    // let num = prompt("Enter number:")
    let num = 10
    if(num > 0){
    resolve(num)
    } else{
        reject("Invalid number")
    }
}).then(
    (value) => {
        console.log(value);
        return value * 10
    }
).then (
    (value) => {
        console.log(value)
        return value + 50
    }
).then(
    (value) => {
        console.log(value)
    }
).catch(
    (error)=>{
        console.log(error);
    }
).finally(()=> {
        console.log('Cleaned up')
})
