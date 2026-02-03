function getOrder(kind:string | number){
    if(typeof kind === "string"){
        return `Order ${kind} dispatched`
    }
    return `order: ${kind}`
}

function deliveryOrder(msg?: string){
    if(msg){
        return `Order ${msg}`
    }
    return ` Order dispatched`
}


function orderDispatched(size:"small"|"medium"|"Large"|number){
    if (size==="small"){
        return `small sized parcel dispatched`
    }
    if(size === "medium" || size ==="Large"){
        return `Add more shipment`
    }
return `order #${size}`
}


class Preorder{
    serve(){
        return `Serving Order`
    }
}
class Postorder{
    serve(){
        return `Serving Order`
    }
}

function serve(order: Preorder | Postorder ){
    if(order instanceof Preorder){
        return order.serve();
    }
}

type ServeOrder = {
    type :string
    person : number
}

function isServeOrder (obj:any):obj is ServeOrder{
    return(
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.person === "number"
    )
}

function serveThings(item:ServeOrder | string){
    if (isServeOrder(item)){
        return `Serving  ${item.type} to ${item.person}`
    }
    return `Serving orders :${item}`
}


type HotelVacant = {
  type: "hotel";
};

type RestroVacant = {
  type: "restro";
};

type LodgeVacant = {
  type: "lodge";
};


type Vacant = HotelVacant | RestroVacant | LodgeVacant;
function MakeBook(order: Vacant) {
  switch (order.type) {
    case "hotel":
      return "Hotel is Booked";

    case "restro":
      return "Restro is Booked";

    case "lodge":
      return "Lodge is Booked";

    default:
      const _exhaustiveCheck: never = order;
      return _exhaustiveCheck;
  }
}
