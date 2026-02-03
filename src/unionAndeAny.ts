let subs :number| string = "1M"


let apiRequestStatus: "pending" |"success"|"error"= "pending"

let airlineSeat: "aisle" | "window" | "middle" 

airlineSeat = "aisle"


const orders = ["12" , " 20", "25", "56"]

let currentorder;

for(let order of orders)
{
    if(order === "20"){
        currentorder = order
        break
    }
}

console.log(currentorder)