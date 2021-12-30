let apples:number=5
//let keyword can be reassigned
// but const can never be reassigned
// we are going to see that same pattern repeating every time we tried to assign
// a different type of value
let speed:string ='fast'
let hasa:boolean = true
let nothingmch:null = null
let nothing:undefined = undefined

// built in objects

let now:Date = new Date()
// we can assign a value of type date and with new kyword we are assign a instance
// of date object

// array

// here we can assign a array of strings and may be these string like red
// green and blue because here we are calling the colors

let colors:string[] = ['red','green','blue']

// colors:string says that we have assigned to colors array which is of type array that
//contians strings 
let mynumber:number[]=[1,2,3,4,5]
let truths:boolean[]=[true,false,true]

//classes
// I just want you to understand how we can add in a type annotation with an instance
// of class car

class Car{



}

//let car:Car// it means we are refering to type of class car variable car
// refering to instance of car
let car:Car = new Car();

// object literal 

let point:{x:number;y:number}={
    x:10,
    y:20
};

//function

const logfunction:(i:number) => void = (i:number) =>{
    console.log(i);
}
// logfunction:(i:number) what type of vlaue assign to variable logfunction
//const logfunction:(i:number) => void = (i:number) it is annotation before
// equal to and after equal to function starts
// const json = '{"x":20,"y:30"}'
// const coordinates = JSON.parse(json)
// console.log(coordinates)

// it return any type if we dont use number or string
// solution is defined below

const json = '{"x":20,"y:30"}'
const coordinates:{x:number,y:number} = JSON.parse(json)
console.log(coordinates)// x:20 y:30

// when we declare variable and intialize later

let words = ['red','green','blue']
let foundword = false;

for(let i=0;i<words.length;i++){
    if(words[i]=='green'){
        foundword =true
    }
}

















