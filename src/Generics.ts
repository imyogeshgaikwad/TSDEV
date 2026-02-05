function wrapInArray<T>(item:T):T[]{
    return [item]
}

wrapInArray("version")
wrapInArray(69)
wrapInArray({model:"v1"})


function pair<A, B>(a:A, b:B): [A, B]{
    return [a, b]
}

pair("model", "test")
pair("test", 56)
pair("model",{model:"v1"})


interface Box<T>{
    content:T
}


const numBox : Box<number>={content: 54}
const numBoxes : Box<string>={content: "dji"}


interface Apipromise<T>{
    status: number,
    data: T
}

const res: Apipromise<{model: string}>={
    status: 200,
    data:{model:"V1"}
}

