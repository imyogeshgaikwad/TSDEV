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