/* ES Modules (ESM) are JavaScript's built-in system for splitting code into separate files and controlling what each file exposes to other files. 
One file can export values, functions, classes, etc., and another file can import them. 
Think of a JavaScript module as roughly similar to a Kotlin file/package boundary: instead of putting your entire application into one giant file, you organize it into small, reusable units.

// User.js

export default function User() {
  // ...
}

Then:

import User from "./User.js";

Notice something:

There are no curly braces.

Compare:

import { add } from "./math.js";

with:

import User from "./User.js";

Named export
export function add() {}

Import:

import { add } from "./math.js";

Default export
export default function User() {}

Import:

import User from "./User.js";


Default imports can be renamed
If you have:

export default function User() {}
you can write:

import User from "./User.js";

or:

import UserComponent from "./User.js";

or:

import WhateverIWant from "./User.js";

With named exports:

export function add() {}

you normally write:

import { add } from "./math.js";

But you can explicitly rename it:

import { add as sum } from "./math.js";

console.log(sum(2, 3));

Think:

exported name → local name
add           → sum

*/