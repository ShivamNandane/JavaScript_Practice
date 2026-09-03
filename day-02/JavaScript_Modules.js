/* A module is simply a JavaScript file whose code is treated as a separate unit. 
 It can export values (functions, classes, variables, etc.) 
 so other files can use them, and other files can import those values.*/

 /*default export
export default function add(a, b) {
    return a + b;
}

Then:

import add from "./math.js";

Notice there are no {}.*/



/* Named export

 export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

Then:

import { add, subtract } from "./math.js";

The {} are important. */