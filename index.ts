console.log("before async");
let setTimeoutID : number = 0;
setTimeoutID = setTimeout(()=>{
    console.log("setTimeout async");
    

},1000);

if(true){
    clearTimeout(setTimeoutID)
}
console.log("after async");

