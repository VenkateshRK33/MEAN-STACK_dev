var names=["saitama","genos","flash"];

var obj ={
    name:"saitama",
    job:"hero-assosiations",
    category:"GOD-LEVEL"
};

for(var prop in obj){
    console.log(prop+":"+obj[prop]);
}

////////////////////////////////
var names2 = ["saitama","genos","flash"];
 for(var name in names2){
     console.log("\none punch man :"+names2[name]);
 }

 ////////////////////////////////

names2.greeing = "Atomic";
 for(var name in names2){
     console.log("\none punch man in sea2:"+names2[name]);
 } 