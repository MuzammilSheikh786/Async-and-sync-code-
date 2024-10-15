"use strict";
console.log("before async");
function printName() {
    console.log("shayan ali");
}
setTimeout(printName, 10000);
// setInterval(printName,1000)
console.log("after async");
