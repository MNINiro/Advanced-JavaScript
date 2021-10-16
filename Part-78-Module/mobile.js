// In default export only one class or function or 
//var/constant can be used at a time

//Ex-1-Defaut export class
export default class Nokia {
    volumeUp(){
        console.log('High volume');
    }
}

// Ex-1.1-Alternate way
// class Nokia {
//     volumeUp(){
//         console.log('High volume');
//     }
// }
// export default Nokia;

// Ex-2-Export default function
// export default function show(){
//     console.log("It's a default export function");
// }

// Ex-2.1-Alternate way
// function show(){
//     console.log("It's a function");
// }
// export default show;

// Ex-3-Export default variable/constant
// const a =101;
// export default a;

//Multiple Named import is possible at a time
/*  ===============================================
            Named Export class
    =============================================== */
class Samsung {
    volumeDown(){
    console.log('Low volume');
    }
}
export {Samsung};
    
/*  ===============================================
            Named Export function
    =============================================== */
function Display(){
    console.log("It's a named export function");
}
export {Display};

/*  ===============================================
            Named Export variable/constant
    =============================================== */
const x = 500
export {x};

/* **************************************************
All of the named export can be exported usinf single statement
to run following statement, all of the above export statements must be commented
***************************************************** */
// export{Nokia,Display,x}