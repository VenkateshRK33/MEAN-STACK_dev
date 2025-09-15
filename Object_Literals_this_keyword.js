var litarlcircle={
    radius:10,
    getArea:function(){

        var self=this;
        console.log(this);

        var incrrad=function(){
            self.radius=20;
        };
        incrrad();
        console.log(this.radius);
        return Math.PI *Math.pow(this.radius,2);
    }

};
console.log(litarlcircle.getArea());