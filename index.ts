import axios from 'axios'
import {response } from "express"

const url ='https://jsonplaceholder.typicode.com/todos/';
interface Todo{
    userId : number,
    id : number,
    title : string,
    completed : boolean
}


const logtodo = (id:number,title:string,completed:boolean)=>{
    console.log(`The todo with id :${id} has a title of :${title} Is it finished${completed}`)
}
      axios.get(url).then((response:any)=>{
      console.log(response?.data[0]);

    //   const todo = response.data[0] as Todo;
      
    //   const id = todo.id;
    //   const title = todo.title;
    //   const completed = todo.completed;
    //   logtodo(id,title,completed);
})      

class color {

}
const red = new color();





