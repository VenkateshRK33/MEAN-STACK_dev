var arrays=new Array;
arrays[0]="sukuna";
arrays[1]=2;
arrays[2]=function (name){
    console.log("hey "+name);
}
console.log(arrays);
arrays[2](arrays[0]);
///////////////////////////////

var naems=["sukuna","gojo","hakare"]
console.log(naems)
for(var i=0;i<naems.length;i++){
    console.log("hello "+naems[i]);
}

////////////////////////////////////////////

var sins=["maliyods","escanor","king"]

for(var  names in sins){
    console.log("deadlly sin: "+sins[names])
}