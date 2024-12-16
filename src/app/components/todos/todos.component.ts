import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { todo } from '../../Models/todo';
import { TodoService } from '../../Services/todo.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todos',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

  image:string="https://th.bing.com/th/id/OIP.qNvW0oMkWlOaf4nKKbD7nwHaHa?rs=1&pid=ImgDetMain";
  tasks:string[]=[];
  newtask:string="";
  idnew:string="1A";
  istrue:boolean=false;
  todolist:todo[]=[];
  newtodo:todo={}as todo;
  constructor(private todoservice:TodoService) {

  }
  ngOnInit(): void {
    this.getall();
  }
  getall(){
this.todoservice.getalltodo().subscribe(x=>{
  this.todolist=x}
);
  }
  creatnew():void{
   const new1={id:this.newtodo.id,title:this.newtodo.title,completed:false}
   this.newtodo=new1;
   this.todoservice.creattodo(new1).subscribe(x=>
    {
      this.todolist.push(x)
      this.newtodo.title = ''; // Clear input after adding

    }
   );
  }
  delete(todoid:string):void{
    this.todoservice.deletetodo(todoid).subscribe(()=>{

     this.todolist= this.todolist.filter(todo=>todo.id !==todoid)
    })

  }
fn(index:number)
{
  return index;
}
updateTodoStatus(todo: todo) {
  this.todoservice.updatetodo(todo).subscribe(updatedTodo => {
    // Handle successful update if needed
    console.log('Todo updated:', updatedTodo);
  }, error => {
    console.error('Error updating todo:', error);
  });
}

}
