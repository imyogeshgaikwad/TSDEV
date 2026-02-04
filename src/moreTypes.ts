let response: any = "42";


let numericLength:number = (response as string).length


type Book={
    namd:string
}

let bookString = '{"name":"zero to one"}'

let bookObject = JSON.parse(bookString)
console.log(bookObject.name)


const inputElement = document.getElementById("username")as HTMLInputElement


let value:any
value ="order"
value = [1, 2, 3]
value = 2.5
value.toUpperCase()


let newVal:unknown
newVal ="order"
newVal = [1, 2, 3]
newVal = 2.5
// newVal.toUpperCase()
if(typeof newVal === "string"){
    newVal.toUpperCase();
}


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }  
    console.log("Error", error)
}

const data:unknown = "developement phase started"
const strData: string = data as string


type Role = "admin" | "user" | "superadmin"

function redirectBasedOnRole(role:Role):void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard")
        return
    }
    if(role === "user"){
         console.log("Redirecting to user dashboard")
        return
    }
    role;
}

function neverReturn():never{
    while(true){}
}
