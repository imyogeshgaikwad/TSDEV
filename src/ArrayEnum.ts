const cartValue:string[]=["deport","Instake"]
const cartPrice:number[]=[1, 2, 3]

const rating:Array<number>=[4.6, 5.5]

type Cart = {
    name:string;
    price:number;

}

const menu: Cart[]=[
    {name:"Amz",price:69},
    {name:"FLP",price:96}
]


const cities: readonly string[]=["Delhi","Jaipur"]
// cities.push("Dublin")


const table: number[][]=[
    [1,2,3],
    [4,5,6]
]

//tuple

let cartTuple:[string, number];
cartTuple = ["Amz",85]
cartTuple = ["Flp",67]


let userInfo:[string,number,boolean?]
userInfo=["IMYOG", 100,false]


const location: readonly[number, number]=[25.66,86.66]

const cartItem: [name:string, price:number]=["Amz",65]

//enum

enum CartSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CartSize.LARGE


enum Status{
    PENDING =100,
    SERVED, //101
    CANCELLED //102
}

enum CartType {
    NAME = "yog",
    ADDRESS ="add"   
}

function makeCart(type:CartType){
    console.log(`Making ${type}`)
}

makeCart((CartType.ADDRESS))
makeCart((CartType.NAME))

enum RAndomEnum{
    ID =1,
    NAME ="AMZ"
} //BAD PRAC


const enum Contry{
    LOW = 1,
    MEDIUM =2,
    HIGH = 3
}
const c = Contry.LOW


let t: [string, number]= ["cart",10]
t.push("extra")