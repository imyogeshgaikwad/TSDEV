// class Cart{
//     model:string;
//     price:number;

//     // constructor(model:string, price:number){
//     //     this.model = model
//     //     this.price = price
//     // }
//         constructor(model:string){
//         this.model = model
//     console.log(this);
//    }
// }

// const cartDeliver = new Cart("VZ", 50)
// cartDeliver.model = "V1"




//access modifier

class Cart{
    public  model: string = "V1"

    private secretItems = "Engine Info"

    reveal(){
        return this.secretItems 
    }


}
class Shop{
        protected shopName = "Cart Delivery"

}
const c = new Cart()
c.reveal()

class Branch extends Shop{
    getName(){
        return this.shopName
    }
}

new Branch()

class Walet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

class Cube{
    readonly capacity: number = 258

    constructor(capacity:number){
        this.capacity = capacity
    }

}

class Modernmodel{
    private _black = 2

    get black(){
        return this._black
    }
    set black(value:number){
        if(value > 5) throw new Error("too Black");
        this._black =value
    }
}

const d = new Modernmodel()
d.black = 4

//static member

class tableOne{
    static shopNAme = "Yogains Model"

    constructor(public model:string){}
}
console.log(tableOne.shopNAme)

abstract class Drink{
    abstract make(): void
}

class myDrink extends Drink{
    make() {
        console.log("Mixing");
    }
    
}


class Heater{
    heat(){}
}

//composition
class weather{
    constructor(private heater: Heater){}
        make(){
            this.heater.heat
        }
}





