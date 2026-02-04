const order ={
    name: "Amazon",
    price: 20,
    isPack: true

}

// {
//     name:string;
//     price: number;
//     isPack:boolean
// }


let market:{
    name:string;
    price:number;
    isPack:boolean
}

market={
    name:"kendal",
    price:25,
    isPack:true
}

type Order = {
    name:string;
    price:number;
    insideitems: string[]
}

const orderType: Order = {
    name:"Kendal",
    price:69,
    insideitems:["head","body"]
}

type Box={
    size:string
};

let smallBox: Box={size:"200cm"}

let bigBox ={size:"500cm", material:"paper"}

smallBox = bigBox

type Main = {mainTime: number}
const contain = {mainTime: 5, count:"IND"}
const insta : Main =contain


type User = {
    username:string;
    password:string
}
const u : User={
    username:"imyogeshgaikwad",
    password:'123'
}

type Item={name:string, quantity: number}
type ItemAddress={street:string, pin: number}

type Orders ={
    id:string;
    items: Item[];
    address:ItemAddress[]
}

type Cart = {
    name:string;
    price:number;
    isPack:boolean
}

const updateCart = (updates: Partial<Cart>)=>{
    console.log("Updating Cart with", updates={} )
}

updateCart({price:25})
updateCart({isPack:false})
updateCart({})


type cartOrder = {
    name?:string;
    quantity?:number
}

const placeOrder =(order:Required<cartOrder>)=>{
    console.log(order)
}

placeOrder({
    name:"Amazon",
    quantity:2
})

type carts ={
    name:string;
    price:number
    isPAck:boolean;
    items:string[]
}

type basicCartsINfo = Pick<carts, "name" | "price">

const chartINfo: basicCartsINfo={
    name:"Flipkart",
    price: 69
}

type cartNew = {
    name:string;
    price:number
    isPAck:boolean;
    reserverItem:string;
}

type Publicart = Omit<carts, "reserveItem">