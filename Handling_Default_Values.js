function order(sidedish){
    if(sidedish==undefined){
        sidedish="anything"
    }
    console.log("dinner with "+sidedish)

}
order("chilly_panner")
order()

//we can directlly can assign the sidedish a value rather ,  we use another method "bollen check"

function order2(sidedish){
    sidedish=sidedish||"whatever"
    console.log("dinner with "+sidedish)
}
order2()
//it use bollen check whather it is undefined or not ,it only returns the true
