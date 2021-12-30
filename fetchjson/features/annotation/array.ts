const carmakers:string[] = ['ford','toyota','chevy'];
const dates = [new Date(),new Date()]
const carsbymake:string[][]=[];

// help with inference when extracting the values
const car = carmakers[0];
const mycar = carmakers.pop()
// so when we call pop its  going to return an instance of string

//prevent from incompatible types
//carmakers.push(100)// becaue it is a string and we provide 100 which is 
// incompatible

carmakers.map((car:string):string => {
    return car.toUpperCase()
});

const importantDates:(Date | string)[] = [new Date()];
importantDates.push('2023-10-10')
importantDates.push(new Date()) 

// In the above code  date|string is used for inference type eiter you pass the date
// or string

// tuple contain multiple different properties to describe one single thing
// array like structure whre each represent some property of record












