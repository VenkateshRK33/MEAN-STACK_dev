var message="in global";
console.log("global message : " + message);

var a=function(){
    var message="a:inside function a"
    console.log("a:message: "+message);
}
a();
var b=function(){
    var message="b:inside function b";
    console.log("b:message : "+message);
}
b();

var c=function() {
    var message="function c";
    console.log("c:message : "+message);

    function d(){
        console.log("d function is inside------" + message);

    }
    d();
}
c();
