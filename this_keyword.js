function circle(radius){
    this.radius = radius;
}
circle.prototype.getarea=function(){
    return Math.PI*Math.pow(this.radius,2);
};
var mycircle=new circle(10);
console.log(mycircle);

var mycircle2=new circle(2);
console.log(mycircle2.getarea());