"use strict";
console.log("before async");
let setTimeoutID = 2;
setTimeoutID = setTimeout(() => {
    console.log("setTimeout async");
}, 1000);
if (false) {
    clearTimeout(setTimeoutID);
}
console.log("after async");
