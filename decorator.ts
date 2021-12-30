// decorator is a function  that can be used to modify change anything
// different properties method in class

// not the same as javascript decorator use inside/on classes
// understanding the order in which decoraotr are ran are the key to 
// understand them. experimental // In typescript we are only going to use
// decorator aound classes.

class Boat{
    color:string = 'red'// we have a property
    getformattedcolor():string{ // we have accessor
        return `this boat color is ${this.color}`
    }
    @testdecorator
    pilot():void{
        // we have decorator
        console.log('swish');        
    }
}
function testdecorator(target:any,color:string):void{
    console.log(target)
    console.log(color)
}
// the decorator cannot get executed when we creating an instance of class


// calling the method testdecorator(Boat.prototype,'pilot')






