// Ex-1-Default import class
import Nokia from "./mobile.js"; //importing class
const n = new Nokia();           //creating object of the class
n.volumeUp();                    //using function

// Ex-2-Default import function
// import show from "./mobile.js";
// show();

// Ex-3-Default import variable/constant
// import a from  "./mobile.js";
// console.log('default import:',a);

/*  ===============================================
            Named import class
    =============================================== */
import { Samsung } from "./mobile.js";
const ns = new Samsung();  //creating object of the class
ns.volumeDown();

/*  ===============================================
            Named import function
    =============================================== */

import {Display} from "./mobile.js";
Display();

/*  ===============================================
            Named import variable/constant
    =============================================== */

    import {x} from "./mobile.js";
    console.log('named import:',x);


/*  ===============================================
            All of the Named import at a time
    to run following statement, all of the above import 
                statements must be commented
    =============================================== */    
    // import { Samsung, Display, x } from "./mobile.js";
    // const ns = new Samsung();  //creating object of the class
    // ns.volumeDown();
    // Display();
    // console.log(x);

    // Alternate way 
    // import * as device from "./mobile.js";
    // const nm = new device.Samsung();  //creating object of the class
    // nm.volumeDown();
    // device.Display();
    // console.log(device.x);    

