type optionOrder = {
    type: string;
    value: number;
    amount: boolean}

function makeOption(order:optionOrder){
    console.log(order)
}

function dilOption(order: {type: string ; value: number; amount: boolean}){
    console.log(order)
}

type bookTicket = {
    room: number;
    roomate: number;

}

class TicketCounter implements bookTicket{
        room = 20;
        roomate = 4;
}

interface roomSize { size: "1BHK" | "2BHK" }

class Room implements roomSize{
    size: "1BHK" | "2BHK" = "1BHK";
}

// type Response = {ok:true}|{ok:false}
// class takeIr implements Response{
//     ok: boolean=true
// }


type management = "oders" | " dispatch" | "packing" //literal tyupes

function deliverManage(o: management){
    console.log(o)
}


type BaseManage = {orderVal :number}
type Extra = {sizing: number}

type Manage = BaseManage & Extra

const container : Manage = {
    orderVal:5,
    sizing: 6
}

type User = {
    username: string;
    bio?: string
}

const Signin : User ={username:"imyogeshgaikwad"}
const Signin2 : User ={username:"imyogeshgaikwad", bio:"https://github.com/imyogeshgaikwad"}

type Config = {
    readonly appName:string
    version:number
}

const cfg: Config={
    appName: "Yogains",
    version:2
}

// cfg.appName = "DJI"
