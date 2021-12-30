class Person {
    firstname:string
    lastname:string
    greet(){
        console.log('hey there');    
    }
}    
class programmer extends Person
{
    greet(){
        console.log('hello world');    
    }
}    
var aprogrammer:Person = new Person()
aprogrammer.greet()
     
