var x=4,y=3
if(x==y){
    console.log("they are equal")
}
else{
    console.log("they are not eqaul")
}


//js will type cast   ,,,, HOW THE STRING AND NUMBER COULD BE EQUAL
var a="4",b=4
if(a==b){
    console.log("they are equal")
}
else{
    console.log("not eqaul")
}

//SO TELL JS TO NOT TO TYPE CAST ,,,CALLED STRICT EQUALTY
if(a===b) {
    console.log("they are equal")
}
else{
    console.log("they are not equal,bcz one off them is string")
}