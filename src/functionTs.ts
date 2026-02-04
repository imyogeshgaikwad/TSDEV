function makeInvent(type:string, item:number){
    console.log(`Making ${item} items of${type}`)
}


makeInvent("Microwave", 5)

function getInventPrice():number{
    return 25
}

function makeOrder(order:string){
    if(!order)return null 
    return order
}

//loggerfn

function logUse():void{
    console.log("User is Log")
}


//optionsl and default para

// function OrderINvemt(type?:string){
//     console.log("this is OP")
// }

function OrderINvemt(type:string = "Assigned"){
    console.log("this is OP")
}

function createItem(order:{
    type:string;
    size:number;
    amount: "small"|"Large";
}):number{
    return 4
}



