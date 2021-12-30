interface vehicle {
    name :string
    //year:number
    year:Date
    broken:boolean
    summary():string 
}
interface reportable {
    color :string
    //year:number
    carbonated:boolean
    sugar:number
    summary():string 
}
const oldcivic = {
    name:'civic',
    year: new Date(),
    broken:true,
    summary():string {
        return `name:${this.name}`
    }
}

// const drink: = {
//     color:'brown',
//     carbonated:true,
//     sugar:40,
//     summary():string {
//         return `my drink has ${this.sugar} grams of sugar`
//     }
// }

// now we are creating a function printvehicle
const printvehicle =(vehicle:vehicle):void=>{
    console.log(`name:${vehicle.name}`);
    console.log(`year:${vehicle.year}`)
    console.log(`broken${vehicle.broken}`)
}
const printsummary = (item:reportable):void =>{
    console.log(item.summary())    
}

printvehicle(oldcivic)
printsummary(drink)

// remember when we are creating a interface we are creating a type
// class is a blueprint to create an object  with some field (values) and 
// methods(functions) to represent a thing














