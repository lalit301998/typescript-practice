// when we create a class we are creating a blueprint or 
// definition what vehicle should be
class Vehicle1 {
    drive():void{
        console.log('chugga chugga')
    }
    honk():void{
        console.log('beep')
    }
}
// const vehicle = new Vehicle()
// vehicle.drive()
// vehicle.honk()

class Cars extends Vehicle1{
    // to override the function vehicle
      drive():void{
          console.log('vroom')
      }
      hello(){
          super.drive()
      }
}
const car1 = new Cars();
car1.drive();
car1.honk();
car1.hello()





