function multiple(x,y){
    return x * y;
}
console.log(multiple(3,5))

// function factory
function makemulti(multiplier){
    var myfunc = function (x){
        return multiplier * x;
    };
    return myfunc;
}

var multiby3 = makemulti(3);
console.log(multiby3(10));

var doubleall =  makemulti(2);
console.log(doubleall(100));


function operation(x,oper){
    return oper(x);
}
var result =operation(5,multiby3);
console.log("new function : "+result);
result=operation(10,doubleall);
console.log("new function : "+result);