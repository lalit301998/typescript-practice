const add = (a:number,b:number):number=>{
    return a+b
}
function divide(a:number,b:number):number{
    return a-b

}
//at the end of function :number it is used for return value

const multiply = function(a:number,b:number){
    return a*b
}
// anonymous function is above

const logger = (message:string):void =>{

    console.log('message')
}

// destructuring


const forecast = {
    date:new Date(),
    weather:'sunny'
}

const todayweather = (forecast:{date:Date,weather:string}):void=>{
console.log(forecast.date);
console.log(forecast.weather);
}
todayweather(forecast)
//destructing the date and weather property from forecast





