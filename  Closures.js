function multi(multipler){
    function b(){
        console.log("multiplier is:"+multipler);

    }
    b();

    return{
        calc:function(x){
            return multipler * x;

        }
    };
}

var doubleall = multi(2);
console.log(doubleall.calc(10));
