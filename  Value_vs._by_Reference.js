console.log("THIS IS PASS BY VALUE");
var a= 7;
var b =a;
console.log("a: "+a);
console.log("b: "+b);

b=5;
console.log("after b updates")
console.log("a: "+a)
console.log("b: "+b)

console.log("\nTHIS IS PASS BY REFERENCE");
var x ={X:7};
var y=x;
console.log("x: ",x);
console.log("y: ",y);

y.X=5;
console.log("after pass by refernce");
console.log("x: ",x);
console.log("y : ",y);
////////////////////////////////////////////////

console.log("\nTHIS IS PASS BY VALUE BY USING FUNCTION");

function changeprim(primeval){
    console.log("in changeprima...");
    console.log("before");
    console.log(primeval);

    primeval = 5;
    console.log("after");
    console.log(primeval);

}
var value =7 ;
changeprim(value);
console.log("after changeprim,,origanal value");
console.log(value);
/////////////////////////
console.log("\nTHIS IS PASS BY REFERNCE BY USING FUNCTION");
    function changeobj(objvalue){
        console.log("in changeobj...");
        console.log("before");
        console.log(objvalue);

        objvalue.m=5;
        console.log("after");
        console.log(objvalue);
    }
    value={m:77};
    changeobj(value);
    console.log("after changeobj...");
    console.log(value);