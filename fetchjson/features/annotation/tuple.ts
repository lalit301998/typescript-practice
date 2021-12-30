const drink = {
    color:"brown",
    carbonated:'true',
    sugar:40
}
//const pepsi:[string,boolean,number] = ['brown',true,40]
// instead of writing the above code the optimise solution is
type Drink =[string,boolean,number]
const pepsi:Drink = ["brown",true,40]
const sprite:Drink = ["brown",true,40]
const tea:Drink = ["red",true,50]

// the above concept is called type alias
const carspecs:[number ,number] = [400,354]
const carstatus = {
    horsepower:400,
    weight:354
}

console.log(drink);


