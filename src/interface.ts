interface Cart{
    model: string;
    price:number

    modify ?: boolean
}

const delivery: Cart ={
    model:"V1",
    price: 80000
}


interface Shop{
    readonly id:number
    name: string
}

const s:Shop={id:7, name:"Etron GT"}

interface Discountcalculater{
    (price: number):number
}

const apply50 : Discountcalculater=(p)=> p* 0.5

interface TabMAchine{
        start():void
        stop():void
}


const machine :TabMAchine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}


//index signatutre

interface CartRatings{
    [model:string]:number
}


const ratings :CartRatings ={
    v1:4.5,
    v2:5
}


interface User{
    name:string
}
interface User{
    age:number
}

const u: User={
    name:"IMYOG",
    age:18
}

interface a {a:string}
interface b {b:string}

interface c extends a, b {}



