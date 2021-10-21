// Ex-1
function myfun(){
    console.log("Inside function");
}
console.log("Start");
myfun();
console.log("End");


// Ex-2
// console.log("Start");
// setTimeout(()=>{            //Asynchronous function (refer: Part-74)
//     console.log("Inside setTimeout")
// },2000)
// console.log("End");


// Ex-3
// console.log("Start");           //Synchronous function
// const roll = [1,2,3,4,5,6,7,8,9,10];
// roll.forEach(r=>{
//     console.log(r)
// })
// console.log("End");

// Ex-4
// console.log("Start");

// function getName(name){
//     setTimeout(()=>{
//         console.log("Inside setTimeout")
//         return name;
//     },2000)
// }

// const nm = getName("Niro");
// console.log(nm); //Will show undefined because of setTimeout execute after n secs. By that time program moves to the next step. 
// console.log("End");

// Ex-4.1-Solution using callback function
// console.log("Start");

// function getName(name, callback){
//     setTimeout(()=>{
//         console.log("Inside setTimeout")
//         callback(name);
//     },2000)
// }

// const nm = getName("Niro", (nm) => {console.log(nm)});

// console.log("End");

/*  ===================================================================
    Ex-4.2-Callback hell (calling one function inside another and so on)
    ==================================================================*/

// console.log("Start");

// function getName(name, callback){
//     setTimeout(()=>{
//         console.log("Inside name setTimeout")
//         callback(name);
//     },2000)
// }

// function getHobbis(name, callback){
//     setTimeout(()=>{
//         console.log("Inside hobbis setTimeout")
//         callback(['Sports','Reading','Coding']);
//     },1000)
// }

// function getDuration(name, callback){
//     setTimeout(()=>{
//         console.log("Inside duration setTimeout")
//         callback(['6 months','1 month','1 year']);
//     },1000)
// }

// const nm = getName("Niro", (nm) => {console.log(nm);
// getHobbis(nm, (hobby)=>{console.log(hobby)}) 
// getDuration(nm, (duration)=>{console.log(duration)}) })

// console.log("End");



/*  ===================================================================
    Ex-4.3-Refactor using promise to resolve callback hell issue
    ==================================================================*/
/*
console.log("Start");

function getName(name){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Inside name setTimeout")
        resolve(name);
        },2000)
    })
}

function getHobbis(name){
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Inside hobbis setTimeout")
        resolve(['Sports','Reading','Coding']);
        },1000)
    })
}

function getDuration(name){
    return new Promise ((resolve,reject)=>{        
    setTimeout(()=>{
        console.log("Inside duration setTimeout")
        resolve(['6 months','1 month','1 year']);
        },1000)
    })
}

getName('Niro')
.then(nm => getHobbis(nm))
.then(hobby => console.log(hobby))
.then(nm => getDuration(nm))
.then(duration => console.log(duration))
.catch(
    (error)=>{
        console.log(error);
    }
).finally(()=> {
        console.log('Must run statement')
})

console.log("End");
*/

/*  ===================================================================
    Ex-4.4-Async and await function on previous function (commented consumable part)
    ==================================================================*/

// async function showHobby(){
//     try{                                    //here, try catch can be used
//         const nm = await getName('MNI')
//         const hobby = await getHobbis(nm)
//         console.log(hobby);
//     }catch{
//         console.log("Could not be able to fatch hobbies")
//     }finally{
//         console.log('Its finally statement')
//     }
// }
// showHobby();
// console.log("End");

