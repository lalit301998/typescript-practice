// // public this method can be called any where any time
// // this method can only be called by other method in this class
// // this method can be called vy other method in this class or by other
// // method in child classes.

// // by default all these modifier is public

// class Vehicle {
//     //  drive():void{
//     //     console.log('chugga chugga')
//     // }
//     public honk():void{
//         console.log('beep')
//     }
// }
// const vehicle = new Vehicle()
// vehicle.drive()
// vehicle.honk()

// class Car extends Vehicle{
//     // to override the function vehicle
// public    drive():void{
//         console.log('vroom')
//     }
// }
// const car1 = new Car();
// car1.drive();
// car1.honk();

// protected case

// class Vehicle {
//     protected honk():void{
//         console.log('beep')
//     }
// }

// const vehicle = new Vehicle()
// vehicle.honk()

// Accesss the field  with classes 

class Vehicle{
    color:string = 'red'
    protected honk():void{
        console.log('beep')
    }
}

const vehicle = new Vehicle();
console.log(vehicle.color)




